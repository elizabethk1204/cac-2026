import { useState } from "react";

export default function Collections() {
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
    <div className="collections-page">
      <button className="back-btn" onClick={() => console.log("Go back")}>
        ← Back to Profile
      </button>

      <div className="collections-container">
        <div className="collections-header">
          <h1>My Collections</h1>
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
              value={newCollectionName}
              onChange={(e) => setNewCollectionName(e.target.value)}
              placeholder="Collection name"
            />
            <button
              onClick={() => {
                createCollection();
              }}
            >
              Create
            </button>
          </div>
        )}

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
