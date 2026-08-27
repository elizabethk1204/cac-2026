import { useMemo, useState } from "react";

const mockPapers = [
  {
    id: 1,
    title: "Deep Learning for Natural Language Processing",
    authors: "Smith, J., Johnson, M., Williams, R.",
    date: "2024-06-15",
    topic: "Computer Science",
    tags: ["#machinelearning", "#NLP", "#transformers"],
    abstractQuote:
      '"Transformer architectures have become the dominant approach for a wide range of natural language processing tasks, enabling substantial gains through scalable attention mechanisms and transfer learning."',
    image: "AI",
    journal: "Nature Machine Intelligence",
    readTime: "12 min read",
    saved: false,
  },
  {
    id: 2,
    title: "Quantum Computing: Opportunities and Challenges",
    authors: "Brown, A., Davis, K., Chen, L.",
    date: "2024-05-20",
    topic: "Physics",
    tags: ["#quantumcomputing", "#cryptography", "#optimization"],
    abstractQuote:
      '"We review the current state of quantum computing, focusing on the opportunities and practical challenges that arise as quantum systems move toward useful applications."',
    image: "QC",
    journal: "Quantum Information",
    readTime: "8 min read",
    saved: false,
  },
  {
    id: 3,
    title: "CRISPR Gene Editing: Advances and Ethical Considerations",
    authors: "Martinez, S., Lee, H., Patel, R.",
    date: "2024-07-10",
    topic: "Biology",
    tags: ["#CRISPR", "#geneediting", "#bioethics"],
    abstractQuote:
      '"Recent advances in CRISPR-based technologies have expanded the precision and range of genome editing, while also raising important questions about responsible clinical translation."',
    image: "BIO",
    journal: "Nature Biotechnology",
    readTime: "10 min read",
    saved: false,
  },
];

export default function MainFeed({ onNavigate }) {
  const [query, setQuery] = useState("");
  const [activeTopic, setActiveTopic] = useState("For you");
  const [ratings, setRatings] = useState({});
  const [saved, setSaved] = useState([]);

  const visiblePapers = useMemo(
    () =>
      mockPapers.filter((paper) => {
        const matchesTopic =
          activeTopic === "For you" || paper.topic === activeTopic;
        const searchText =
          `${paper.title} ${paper.authors} ${paper.topic}`.toLowerCase();
        return matchesTopic && searchText.includes(query.toLowerCase());
      }),
    [activeTopic, query],
  );

  const toggleItem = (setItems, id) => {
    setItems((items) =>
      items.includes(id) ? items.filter((item) => item !== id) : [...items, id],
    );
  };

  const setPaperRating = (paperId, rating) => {
    setRatings((currentRatings) => ({ ...currentRatings, [paperId]: rating }));
  };

  return (
    <div className="main-feed-page">
      <aside className="app-sidebar">
        <div className="brand-mark">
          <span>↗</span> paperflow
        </div>
        <p className="sidebar-kicker">Your research desk</p>
        <nav className="primary-nav" aria-label="Primary navigation">
          <button
            className="nav-item active"
            onClick={() => onNavigate("feed")}
          >
            <span>◈</span> Discover
          </button>
          <button
            className="nav-item"
            onClick={() => onNavigate("collections")}
          >
            <span>▱</span> Library
          </button>
          <button className="nav-item" onClick={() => onNavigate("search")}>
            <span>⌕</span> Search
          </button>
        </nav>
        <div className="sidebar-bottom">
          <button
            className="profile-mini"
            onClick={() => onNavigate("profile")}
          >
            <span className="avatar">EK</span>
            <span>
              <strong>Elizabeth Kim</strong>
              <small>Personal workspace</small>
            </span>
            <b>•••</b>
          </button>
          <button
            className="settings-link"
            onClick={() => onNavigate("settings")}
          >
            ⚙ Settings
          </button>
        </div>
      </aside>

      <main className="feed-main">
        <header className="feed-header">
          <div className="feed-heading">
            <div>
              <p className="eyebrow">Wednesday, August 26</p>
              <h1>Good morning, Elizabeth</h1>
            </div>
            <button className="notification-btn" aria-label="Notifications">
              ♧<i />
            </button>
          </div>
          <div className="search-bar">
            <span>⌕</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              type="search"
              placeholder="Search papers, authors, topics..."
            />
          </div>
          <div className="topic-tabs" role="tablist">
            {["For you", "Computer Science", "Biology", "Physics"].map(
              (topic) => (
                <button
                  key={topic}
                  className={
                    activeTopic === topic ? "topic-tab active" : "topic-tab"
                  }
                  onClick={() => setActiveTopic(topic)}
                >
                  {topic}
                </button>
              ),
            )}
          </div>
        </header>

        <div className="feed-layout">
          <section className="feed-container">
            <div className="section-title">
              <div>
                <p className="eyebrow">Curated for your interests</p>
                <h2>Today&apos;s reading list</h2>
              </div>
              <button className="text-btn">
                Latest <span>⌄</span>
              </button>
            </div>
            {visiblePapers.map((paper, index) => (
              <article key={paper.id} className="paper-card">
                <div
                  className={`paper-image paper-image-${index + 1}`}
                  aria-label={`Visual for ${paper.title}`}
                >
                  <span>{paper.image}</span>
                  <div className="image-lines" />
                  <div className="visual-caption">FIGURE / VISUAL SUMMARY</div>
                </div>
                <div className="paper-content">
                  <div className="paper-meta">
                    <span className="paper-date">
                      {paper.date} · {paper.readTime}
                    </span>
                  </div>
                  <h2 className="paper-title">{paper.title}</h2>
                  <p className="paper-authors">{paper.authors}</p>
                  <p className="paper-journal">{paper.journal}</p>
                  <div className="paper-tags">
                    {paper.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="abstract-snapshot">
                    <p className="abstract-label">From the abstract</p>
                    <blockquote className="paper-summary">{paper.abstractQuote}</blockquote>
                  </div>
                  <div className="paper-card-footer">
                    <span className="paper-category">{paper.topic}</span>
                    <button
                      className="read-btn"
                      onClick={() => onNavigate("paper")}
                    >
                      Read paper <span>↗</span>
                    </button>
                  </div>
                </div>
                <div className="paper-action-rail">
                  <div className="rating-control" aria-label={`Rate ${paper.title}`}>
                    <div className="star-row">
                      {[1, 2, 3, 4, 5].map((star) => {
                        const currentRating = ratings[paper.id] || 0;
                        return (
                          <button
                            key={star}
                            className={star <= currentRating ? "star-btn selected" : "star-btn"}
                            onClick={() => setPaperRating(paper.id, star)}
                            aria-label={`${star} out of 5 stars`}
                          >
                            ★
                          </button>
                        );
                      })}
                    </div>
                    <small>{ratings[paper.id] ? `${ratings[paper.id]} / 5` : "Rate this paper"}</small>
                  </div>
                  <button
                    className={
                      saved.includes(paper.id) ? "rail-btn selected" : "rail-btn"
                    }
                    onClick={() => toggleItem(setSaved, paper.id)}
                    aria-label={`Save ${paper.title}`}
                  >
                    <span>▱</span>
                    <small>{saved.includes(paper.id) ? "Saved" : "Save"}</small>
                  </button>
                </div>
              </article>
            ))}
            {!visiblePapers.length && (
              <div className="empty-state">
                <strong>No papers found</strong>
                <p>Try another topic or search term.</p>
              </div>
            )}
          </section>
          <aside className="feed-aside">
            <div className="streak-card">
              <div className="streak-top">
                <span className="flame">✦</span>
                <span>Reading streak</span>
                <b>4 days</b>
              </div>
              <p>Keep your momentum going.</p>
              <div className="streak-days">
                <span className="done">M</span>
                <span className="done">T</span>
                <span className="done">W</span>
                <span className="today">T</span>
                <span>F</span>
                <span>S</span>
                <span>S</span>
              </div>
            </div>
            <div className="aside-section">
              <div className="aside-heading">
                <h3>Your collections</h3>
                <button onClick={() => onNavigate("collections")}>
                  View all
                </button>
              </div>
              <button className="collection-row">
                <span className="collection-icon coral">◌</span>
                <span>
                  <strong>AI & Machine Learning</strong>
                  <small>15 papers</small>
                </span>
                <b>›</b>
              </button>
              <button className="collection-row">
                <span className="collection-icon green">⌁</span>
                <span>
                  <strong>Neuroscience</strong>
                  <small>8 papers</small>
                </span>
                <b>›</b>
              </button>
              <button className="collection-row">
                <span className="collection-icon yellow">✧</span>
                <span>
                  <strong>To read this week</strong>
                  <small>6 papers</small>
                </span>
                <b>›</b>
              </button>
            </div>
            <div className="aside-section weekly-goal">
              <div className="aside-heading">
                <h3>Weekly goal</h3>
                <span>3 / 5 papers</span>
              </div>
              <div className="progress-track">
                <span />
              </div>
              <p>Two more papers to reach your goal.</p>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
