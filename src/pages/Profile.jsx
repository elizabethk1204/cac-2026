export default function Profile() {
  return (
    <div className="profile-page">
      <div className="profile-container">
        <div className="profile-header">
          <div className="profile-avatar">👤</div>
          <h1>Elizabeth Kim</h1>
          <p className="profile-email">elizabeth@example.com</p>
          <div className="profile-stats">
            <div className="stat">
              <span className="stat-value">24</span>
              <span className="stat-label">Papers Saved</span>
            </div>
            <div className="stat">
              <span className="stat-value">12</span>
              <span className="stat-label">Collections</span>
            </div>
            <div className="stat">
              <span className="stat-value">156</span>
              <span className="stat-label">Papers Read</span>
            </div>
          </div>
        </div>

        <div className="profile-tabs">
          <button className="tab-btn active">📚 Saved Papers</button>
          <button className="tab-btn">📁 Collections</button>
          <button className="tab-btn">📊 Statistics</button>
          <button className="tab-btn">⚙️ Settings</button>
        </div>

        <div className="profile-section">
          <div className="profile-overview-grid">
            <div className="profile-progress-card">
              <p className="eyebrow">Weekly streak</p>
              <strong>4 days</strong>
              <span>Best: 12 days</span>
            </div>
            <div className="profile-progress-card">
              <p className="eyebrow">Weekly goal</p>
              <strong>3 / 5</strong>
              <span>papers read</span>
              <div className="progress-track">
                <span />
              </div>
            </div>
            <div className="profile-progress-card">
              <p className="eyebrow">Focus areas</p>
              <strong>3 topics</strong>
              <span>Personalized recommendations</span>
            </div>
          </div>
        </div>

        <div className="profile-section">
          <h2>Interests & Expertise</h2>
          <p className="profile-preferences">
            Your recommendations are tuned to your interests and experience.
          </p>
          <div className="profile-interest-tags">
            <span>Computer Science</span>
            <span>Biology</span>
            <span>Physics</span>
            <span>Intermediate</span>
          </div>
        </div>

        <div className="profile-section">
          <h2>Recent Collections</h2>
          <div className="collections-grid">
            <div className="collection-card">
              <div className="collection-icon">🧠</div>
              <h3>Neuroscience</h3>
              <p>8 papers</p>
            </div>
            <div className="collection-card">
              <div className="collection-icon">🤖</div>
              <h3>AI & ML</h3>
              <p>15 papers</p>
            </div>
            <div className="collection-card">
              <div className="collection-icon">🧬</div>
              <h3>Biotechnology</h3>
              <p>12 papers</p>
            </div>
            <div className="collection-card">
              <div className="collection-icon">➕</div>
              <h3>Create New</h3>
              <p>Collection</p>
            </div>
          </div>
        </div>

        <div className="profile-section">
          <h2>Reading History</h2>
          <div className="reading-history">
            <div className="history-item">
              <span className="history-date">Today</span>
              <p>Deep Learning for NLP</p>
              <p className="history-time">2 hours ago</p>
            </div>
            <div className="history-item">
              <span className="history-date">Yesterday</span>
              <p>Quantum Computing: Opportunities and Challenges</p>
              <p className="history-time">1 day ago</p>
            </div>
            <div className="history-item">
              <span className="history-date">Aug 10</span>
              <p>CRISPR Gene Editing: Advances and Ethical Considerations</p>
              <p className="history-time">3 days ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
