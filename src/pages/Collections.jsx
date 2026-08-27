export default function Collections() {
  let [collections, setCollections] = useState([
    {
      id: 1,
      name: "Neuroscience",
      description: "Papers on brain research and cognitive science",
      paperCount: 8,
      icon: "🧠",
    },
    {
      id: 2,
      name: "AI & Machine Learning",
      description: "Deep learning, neural networks, and modern AI",
      paperCount: 15,
      icon: "🤖",
    },
    {
      id: 3,
      name: "Biotechnology",
      description: "CRISPR, gene therapy, and biological engineering",
      paperCount: 12,
      icon: "🧬",
    },
    {
      id: 4,
      name: "Quantum Computing",
      description: "Quantum algorithms and quantum information",
      paperCount: 6,
      icon: "⚛️",
    },
  ]);

  return (
    <div className="collections-page">
      <button className="back-btn" onClick={() => console.log("Go back")}>
        ← Back to Profile
      </button>

      <div className="collections-container">
        <div className="collections-header">
          <h1>My Collections</h1>
          <button
            className="btn btn-primary"
            onClick={() => console.log("Create new collection")}
          >
            + New Collection
          </button>
        </div>

        <div className="collections-grid">
          {collections.map((collection) => (
            <div key={collection.id} className="collection-detail-card">
              <div className="collection-icon-large">{collection.icon}</div>
              <h3>{collection.name}</h3>
              <p className="collection-description">{collection.description}</p>
              <p className="paper-count">{collection.paperCount} papers</p>
              <div className="collection-card-actions">
                <button onClick={() => console.log("View collection")}>
                  View
                </button>
                <button onClick={() => console.log("Edit collection")}>
                  Edit
                </button>
                <button onClick={() => console.log("Delete collection")}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
