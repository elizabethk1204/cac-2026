export default function SearchResults() {
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
    <div className="search-results-page">
      <button className="back-btn" onClick={() => console.log("Go back")}>
        ← Back
      </button>

      <div className="search-results-container">
        <div className="search-header">
          <h1>Search Results</h1>
          <p>Showing results for "Deep Learning"</p>
        </div>

        <div className="search-filters">
          <label>
            Field:
            <select>
              <option>All Fields</option>
              <option>Computer Science</option>
              <option>Biology</option>
              <option>Physics</option>
            </select>
          </label>
          <label>
            Date Range:
            <select>
              <option>Any Time</option>
              <option>Last Year</option>
              <option>Last 5 Years</option>
            </select>
          </label>
          <label>
            Sort by:
            <select>
              <option>Relevance</option>
              <option>Newest First</option>
              <option>Most Cited</option>
            </select>
          </label>
        </div>

        <div className="results-list">
          {results.map((result) => (
            <div key={result.id} className="search-result-item">
              <div className="result-image">{result.image}</div>
              <div className="result-content">
                <h3>{result.title}</h3>
                <p className="result-authors">{result.authors}</p>
                <div className="result-meta">
                  <span>{result.date}</span>
                  <span>{result.citations} citations</span>
                </div>
              </div>
              <div className="result-actions">
                <button onClick={() => console.log("View")}>View</button>
                <button onClick={() => console.log("Save")}>Save</button>
              </div>
            </div>
          ))}
        </div>

        <div className="pagination">
          <button>← Previous</button>
          <span>Page 1 of 15</span>
          <button>Next →</button>
        </div>
      </div>
    </div>
  );
}
