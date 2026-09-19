import { useNavigate, useSearchParams } from "react-router";

export default function SearchResults() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") ?? "";
  const results = [
    {
      id: 1,
      title: "Deep Learning for Natural Language Processing",
      authors: "Smith, J., Johnson, M.",
      date: "2024-06-15",
      citations: 234,
      image: "🤖",
    },
    {
      id: 2,
      title: "Machine Learning Applications in Healthcare",
      authors: "Davis, K., Chen, L.",
      date: "2024-05-10",
      citations: 156,
      image: "⚕️",
    },
    {
      id: 3,
      title: "Deep Neural Networks for Computer Vision",
      authors: "Wilson, A., Brown, M.",
      date: "2024-04-22",
      citations: 312,
      image: "👁️",
    },
  ];

  return (
    <div className="min-h-screen bg-base-200 px-5 py-8">
      <button
        className="mb-6 font-bold text-primary hover:underline"
        onClick={() => navigate("/feed")}
      >
        ← Back
      </button>

      <div className="mx-auto max-w-4xl">
        <div className="mb-6 text-center">
          <h1 className="text-4xl font-black text-primary">Search Results</h1>
          <form
            className="mx-auto my-4 flex max-w-xl gap-2"
            onSubmit={(event) => {
              event.preventDefault();
              const nextQuery = event.currentTarget.elements.query.value.trim();
              setSearchParams(nextQuery ? { q: nextQuery } : {});
            }}
          >
            <input
              className="input input-bordered min-w-0 flex-1"
              key={query}
              name="query"
              type="search"
              defaultValue={query}
              placeholder="Search papers, authors, or tags"
              aria-label="Search papers"
            />
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </form>
          <p>
            {query ? `Showing results for "${query}"` : "Showing all results"}
          </p>
        </div>

        <div className="mb-6 flex flex-wrap gap-4 rounded-2xl border border-base-300 bg-base-100 p-5 shadow-lg">
          <label>
            Field:
            <select className="select select-bordered select-sm">
              <option>All Fields</option>
              <option>Computer Science</option>
              <option>Biology</option>
              <option>Physics</option>
            </select>
          </label>
          <label>
            Date Range:
            <select className="select select-bordered select-sm">
              <option>Any Time</option>
              <option>Last Year</option>
              <option>Last 5 Years</option>
            </select>
          </label>
          <label>
            Sort by:
            <select className="select select-bordered select-sm">
              <option>Relevance</option>
              <option>Newest First</option>
              <option>Most Cited</option>
            </select>
          </label>
        </div>

        <div className="grid gap-3">
          {results.map((result) => (
            <div
              key={result.id}
              className="flex items-center gap-4 rounded-2xl border border-base-300 bg-base-100 p-4 shadow-lg"
            >
              <div className="grid h-16 w-16 shrink-0 place-items-center rounded-xl bg-secondary/10 text-3xl">
                {result.image}
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-black">{result.title}</h3>
                <p className="text-sm text-base-content/60">{result.authors}</p>
                <div className="mt-1 flex gap-3 text-xs text-base-content/50">
                  <span>{result.date}</span>
                  <span>{result.citations} citations</span>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => console.log("View")}
                >
                  View
                </button>
                <button
                  className="btn btn-outline btn-sm"
                  onClick={() => console.log("Save")}
                >
                  Save
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <button className="btn btn-ghost btn-sm">← Previous</button>
          <span>Page 1 of 15</span>
          <button className="btn btn-ghost btn-sm">Next →</button>
        </div>
      </div>
    </div>
  );
}
