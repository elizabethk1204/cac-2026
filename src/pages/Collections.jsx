import { useState } from "react";
import { useNavigate } from "react-router";

export default function Collections() {
  const navigate = useNavigate();
  let [addingCollection, setAddingCollection] = useState(false);
  let [literature, setLiterature] = useState([]);

  let [newCollectionName, setNewCollectionName] = useState("");
  let [collections, setCollections] = useState([
    {
      id: 1,
      name: "Neuroscience",
      description: "Papers on brain research and cognitive science",
      paperCount: 8,
      tags: ["Neuroscience", "Cognitive Science"],
      literature: ["Memory Consolidation During Sleep"],
      icon: "🧠",
    },
    {
      id: 2,
      name: "AI & Machine Learning",
      description: "Deep learning, neural networks, and modern AI",
      paperCount: 15,
      tags: ["AI", "Machine Learning", "Deep Learning"],
      literature: ["Deep Learning for Natural Language Processing"],
      icon: "🤖",
    },
    {
      id: 3,
      name: "Biotechnology",
      description: "CRISPR, gene therapy, and biological engineering",
      paperCount: 12,
      tags: ["Biotechnology", "Genetics", "Molecular Biology"],
      literature: ["CRISPR Gene Editing: Advances and Ethical Considerations"],
      icon: "🧬",
    },
    {
      id: 4,
      name: "Quantum Computing",
      description: "Quantum algorithms and quantum information",
      paperCount: 6,
      tags: ["Quantum Computing", "Quantum Algorithms", "Quantum Information"],
      icon: "⚛️",
    },
  ]);

  function createCollection() {
    let temp = [
      ...collections,
      {
        id: collections.length,
        name: newCollectionName,
        description: "",
        paperCount: 0,
        tags: [],
        icon: "📁",
      },
    ];
    setCollections(temp);
    setNewCollectionName("");
    setAddingCollection(false);
  }

  return (
    <div className="min-h-screen bg-base-200 px-5 py-8">
      <button
        className="mb-6 font-bold text-primary hover:underline"
        onClick={() => navigate("/feed")}
      >
        ← Back to Profile
      </button>

      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h1 className="text-4xl font-black text-primary">My Collections</h1>
          <button
            className="btn btn-primary"
            onClick={() => setAddingCollection(!addingCollection)}
          >
            + New Collection
          </button>
        </div>

        {addingCollection && (
          <div>
            <input
              className="input input-bordered"
              value={newCollectionName}
              onChange={(e) => setNewCollectionName(e.target.value)}
              placeholder="Collection name"
            />
            <button
              className="btn btn-secondary"
              onClick={() => {
                createCollection();
              }}
            >
              Create
            </button>
          </div>
        )}

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {collections.map((collection) => (
            <div
              key={collection.id}
              className="card border border-base-300 bg-base-100 shadow-lg"
            >
              <div className="card border border-base-300 bg-base-100 shadow-lg">
                <div className="card-body">
                  <div className="text-4xl">{collection.icon}</div>
                  <h3 className="card-title">{collection.name}</h3>
                  <p className="text-sm text-base-content/60">
                    {collection.description}
                  </p>
                  <p className="font-bold text-secondary">
                    {collection.paperCount} papers
                  </p>
                  <div className="flex gap-3">
                    <button
                      className="font-bold text-primary"
                      onClick={() => console.log("View collection")}
                    >
                      View
                    </button>
                    <button
                      className="font-bold text-primary"
                      onClick={() => console.log("Edit collection")}
                    >
                      Edit
                    </button>
                    <button
                      className="font-bold text-error"
                      onClick={() => console.log("Delete collection")}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
