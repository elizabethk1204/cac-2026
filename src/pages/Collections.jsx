import { useMemo, useState } from "react";
import { useNavigate } from "react-router";
import { readLibrary, writeLibrary } from "../libraryStore";

const getCollectionKey = (collection) =>
  collection.type === "topic" ? `topic:${collection.name}` : collection.id;

export default function Collections() {
  const navigate = useNavigate();
  const [library, setLibrary] = useState(readLibrary);
  const [addingCollection, setAddingCollection] = useState(false);
  const [newCollectionName, setNewCollectionName] = useState("");
  const [selectedCollectionKey, setSelectedCollectionKey] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const topicCollections = useMemo(() => {
    const topics = new Map();
    library.savedPapers.forEach((paper) => {
      const papers = topics.get(paper.topic) ?? [];
      papers.push(paper);
      topics.set(paper.topic, papers);
    });

    return [...topics.entries()].map(([name, papers]) => ({
      type: "topic",
      name,
      papers,
      id: `topic:${name}`,
    }));
  }, [library.savedPapers]);

  const customCollections = useMemo(
    () =>
      library.customCollections.map((collection) => ({
        ...collection,
        type: "custom",
        papers: library.savedPapers.filter((paper) =>
          collection.paperIds.includes(paper.id),
        ),
      })),
    [library.customCollections, library.savedPapers],
  );

  const allCollections = [...topicCollections, ...customCollections];
  const selectedCollection = allCollections.find(
    (collection) => getCollectionKey(collection) === selectedCollectionKey,
  );

  const persistLibrary = (updatedLibrary) => {
    try {
      writeLibrary(updatedLibrary);
      setLibrary(updatedLibrary);
      setErrorMessage("");
    } catch {
      setErrorMessage("Could not save your changes to this browser.");
    }
  };

  const createCollection = (event) => {
    event.preventDefault();
    const name = newCollectionName.trim();
    if (!name) return;

    const updatedLibrary = {
      ...library,
      customCollections: [
        ...library.customCollections,
        { id: crypto.randomUUID(), name, paperIds: [] },
      ],
    };
    persistLibrary(updatedLibrary);
    setNewCollectionName("");
    setAddingCollection(false);
  };

  const deleteCollection = (collectionId) => {
    const updatedLibrary = {
      ...library,
      customCollections: library.customCollections.filter(
        (collection) => collection.id !== collectionId,
      ),
    };
    persistLibrary(updatedLibrary);
    setSelectedCollectionKey(null);
  };

  const addPaperToCollection = (collectionId, paperId) => {
    const updatedLibrary = {
      ...library,
      customCollections: library.customCollections.map((collection) =>
        collection.id === collectionId &&
        !collection.paperIds.includes(paperId)
          ? { ...collection, paperIds: [...collection.paperIds, paperId] }
          : collection,
      ),
    };
    persistLibrary(updatedLibrary);
  };

  const removePaperFromCollection = (collectionId, paperId) => {
    const updatedLibrary = {
      ...library,
      customCollections: library.customCollections.map((collection) =>
        collection.id === collectionId
          ? {
              ...collection,
              paperIds: collection.paperIds.filter((id) => id !== paperId),
            }
          : collection,
      ),
    };
    persistLibrary(updatedLibrary);
  };

  const unsavedPapers = library.savedPapers.filter(
    (paper) => selectedCollection && !selectedCollection.papers.some((item) => item.id === paper.id),
  );

  return (
    <div className="min-h-screen bg-base-200 px-5 py-8">
      <div className="mx-auto max-w-5xl">
        <button
          className="btn btn-ghost mb-6"
          onClick={() => navigate("/feed")}
        >
          ← Back to feed
        </button>

        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-primary">
              Your library
            </p>
            <h1 className="text-4xl font-black">Collections</h1>
            <p className="mt-2 text-base-content/60">
              Saved papers are automatically grouped by topic.
            </p>
          </div>
          <button
            className="btn btn-primary"
            onClick={() => setAddingCollection((show) => !show)}
          >
            {addingCollection ? "Cancel" : "+ New collection"}
          </button>
        </div>

        {errorMessage && (
          <div className="alert alert-error mb-5" role="alert">
            {errorMessage}
          </div>
        )}

        {addingCollection && (
          <form
            className="mb-6 flex flex-col gap-3 rounded-2xl border border-base-300 bg-base-100 p-4 sm:flex-row"
            onSubmit={createCollection}
          >
            <input
              className="input input-bordered flex-1"
              value={newCollectionName}
              onChange={(event) => setNewCollectionName(event.target.value)}
              placeholder="Give your collection a name"
              aria-label="Collection name"
              maxLength={60}
              required
            />
            <button className="btn btn-primary" type="submit">
              Create collection
            </button>
          </form>
        )}

        {allCollections.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {allCollections.map((collection) => (
              <article
                key={collection.id}
                className="card border border-base-300 bg-base-100 shadow-sm"
              >
                <div className="card-body">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-primary">
                        {collection.type === "topic" ? "Topic collection" : "Custom collection"}
                      </p>
                      <h2 className="card-title mt-2">{collection.name}</h2>
                    </div>
                    <span className="badge badge-outline">
                      {collection.papers.length}
                    </span>
                  </div>
                  <p className="text-sm text-base-content/60">
                    {collection.papers.length === 1
                      ? "1 saved paper"
                      : `${collection.papers.length} saved papers`}
                  </p>
                  <div className="card-actions mt-2 justify-between">
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() =>
                        setSelectedCollectionKey(getCollectionKey(collection))
                      }
                    >
                      View papers
                    </button>
                    {collection.type === "custom" && (
                      <button
                        className="btn btn-ghost btn-sm text-error"
                        onClick={() => deleteCollection(collection.id)}
                      >
                        Delete
                      </button>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-base-content/20 bg-base-100 p-8 text-center">
            <h2 className="text-xl font-bold">Your library is ready</h2>
            <p className="mt-2 text-base-content/60">
              Save a paper from the feed to create topic collections, or create a custom collection now.
            </p>
            <button
              className="btn btn-outline mt-4"
              onClick={() => navigate("/feed")}
            >
              Discover papers
            </button>
          </div>
        )}

        {selectedCollection && (
          <section className="mt-8 rounded-2xl border border-base-300 bg-base-100 p-5">
            <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-primary">
                  {selectedCollection.type === "topic" ? "Topic collection" : "Custom collection"}
                </p>
                <h2 className="mt-1 text-2xl font-black">
                  {selectedCollection.name}
                </h2>
              </div>
              <button
                className="btn btn-ghost btn-sm"
                onClick={() => setSelectedCollectionKey(null)}
              >
                Close
              </button>
            </div>

            {selectedCollection.type === "custom" && library.savedPapers.length > 0 && (
              <div className="mb-5 flex flex-wrap items-center gap-2">
                <label className="font-semibold" htmlFor="add-saved-paper">
                  Add a saved paper:
                </label>
                <select
                  id="add-saved-paper"
                  className="select select-bordered select-sm max-w-full"
                  defaultValue=""
                  onChange={(event) => {
                    if (event.target.value) {
                      addPaperToCollection(
                        selectedCollection.id,
                        Number(event.target.value),
                      );
                      event.target.value = "";
                    }
                  }}
                >
                  <option value="" disabled>
                    Choose a paper
                  </option>
                  {unsavedPapers.map((paper) => (
                    <option key={paper.id} value={paper.id}>
                      {paper.title}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {selectedCollection.papers.length ? (
              <div className="divide-y divide-base-300">
                {selectedCollection.papers.map((paper) => (
                  <article
                    key={paper.id}
                    className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <button
                      className="min-w-0 text-left"
                      onClick={() => navigate("/paper", { state: { paper } })}
                    >
                      <h3 className="font-bold hover:text-primary">
                        {paper.title}
                      </h3>
                      <p className="mt-1 text-sm text-base-content/60">
                        {paper.journal} · {paper.date} · {paper.authors}
                      </p>
                    </button>
                    <div className="flex shrink-0 items-center gap-3">
                      <span className="badge badge-outline">
                        {library.ratings[paper.id]
                          ? `★ ${library.ratings[paper.id]} / 5`
                          : "Not rated"}
                      </span>
                      {selectedCollection.type === "custom" ? (
                        <button
                          className="btn btn-ghost btn-sm"
                          onClick={() =>
                            removePaperFromCollection(
                              selectedCollection.id,
                              paper.id,
                            )
                          }
                        >
                          Remove
                        </button>
                      ) : (
                        <button
                          className="btn btn-ghost btn-sm text-error"
                          onClick={() =>
                            persistLibrary({
                              ...library,
                              savedPapers: library.savedPapers.filter(
                                (item) => item.id !== paper.id,
                              ),
                              customCollections: library.customCollections.map(
                                (collection) => ({
                                  ...collection,
                                  paperIds: collection.paperIds.filter(
                                    (id) => id !== paper.id,
                                  ),
                                }),
                              ),
                            })
                          }
                        >
                          Unsave
                        </button>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <p className="rounded-xl bg-base-200 p-4 text-base-content/60">
                No papers in this collection yet.
              </p>
            )}
          </section>
        )}
      </div>
    </div>
  );
}
