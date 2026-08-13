export default function MainFeed() {
  const mockPapers = [
    {
      id: 1,
      title: "Deep Learning for Natural Language Processing",
      authors: "Smith, J., Johnson, M., Williams, R.",
      date: "2024-06-15",
      topic: "Computer Science",
      summary:
        "A comprehensive study on transformer architectures and their applications in modern NLP systems.",
      image: "🤖",
      likes: 234,
      saved: false,
    },
    {
      id: 2,
      title: "Quantum Computing: Opportunities and Challenges",
      authors: "Brown, A., Davis, K., Chen, L.",
      date: "2024-05-20",
      topic: "Physics",
      summary:
        "Explores current quantum computing technologies and their potential impact on cryptography and optimization.",
      image: "⚛️",
      likes: 156,
      saved: false,
    },
    {
      id: 3,
      title: "CRISPR Gene Editing: Advances and Ethical Considerations",
      authors: "Martinez, S., Lee, H., Patel, R.",
      date: "2024-07-10",
      topic: "Biology",
      summary:
        "Reviews recent breakthroughs in CRISPR technology and discusses ethical frameworks for genome editing.",
      image: "🧬",
      likes: 312,
      saved: false,
    },
  ];

  return (
    <div className="main-feed-page">
      <header className="feed-header">
        <div className="feed-header-top">
          <h1>PaperFlow</h1>
          <div className="header-actions">
            <button
              className="icon-btn"
              onClick={() => console.log("Open Search")}
            >
              🔍
            </button>
            <button
              className="icon-btn"
              onClick={() => console.log("Open Profile")}
            >
              👤
            </button>
          </div>
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by field, author, or keyword..."
          />
        </div>
      </header>

      <div className="feed-container">
        {mockPapers.map((paper) => (
          <div key={paper.id} className="paper-card">
            <div className="paper-image">{paper.image}</div>
            <div className="paper-content">
              <div className="paper-meta">
                <span className="paper-topic">{paper.topic}</span>
                <span className="paper-date">{paper.date}</span>
              </div>
              <h2 className="paper-title">{paper.title}</h2>
              <p className="paper-authors">{paper.authors}</p>
              <p className="paper-summary">{paper.summary}</p>
              <div className="paper-actions">
                <button
                  className="action-btn"
                  onClick={() => console.log("Like paper")}
                >
                  👍 {paper.likes}
                </button>
                <button
                  className="action-btn"
                  onClick={() => console.log("Save paper")}
                >
                  💾 Save
                </button>
                <button
                  className="action-btn"
                  onClick={() => console.log("View paper")}
                >
                  📖 Read
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="feed-footer">
        <p>Keep scrolling to discover more papers</p>
      </div>
    </div>
  );
}
