export default function PaperDetail() {
  return (
    <div className="paper-detail-page">
      <button className="back-btn" onClick={() => console.log("Go back")}>
        ← Back to Feed
      </button>

      <div className="paper-detail-container">
        <div className="paper-detail-header">
          <div className="paper-image-large">🤖</div>
          <h1>Deep Learning for Natural Language Processing</h1>
          <p className="paper-authors-large">
            Smith, J., Johnson, M., Williams, R.
          </p>
          <p className="paper-journal">
            Published in: Nature Machine Intelligence
          </p>
          <p className="paper-date-large">June 15, 2024</p>
        </div>

        <div className="paper-detail-stats">
          <div className="stat">
            <span className="stat-value">2,340</span>
            <span className="stat-label">Citations</span>
          </div>
          <div className="stat">
            <span className="stat-value">8.5/10</span>
            <span className="stat-label">Rating</span>
          </div>
          <div className="stat">
            <span className="stat-value">12 min</span>
            <span className="stat-label">Read Time</span>
          </div>
        </div>

        <div className="paper-detail-section">
          <h2>Abstract</h2>
          <p>
            This comprehensive study examines the evolution of transformer
            architectures and their applications in modern natural language
            processing systems. We discuss key innovations including attention
            mechanisms, fine-tuning strategies, and practical implementations
            across various NLP tasks.
          </p>
        </div>

        <div className="paper-detail-section">
          <h2>Key Findings</h2>
          <ul>
            <li>
              Transformer models outperform traditional RNN-based approaches
            </li>
            <li>Transfer learning significantly reduces training time</li>
            <li>Multi-task training improves generalization</li>
            <li>Model size correlates strongly with performance gains</li>
          </ul>
        </div>

        <div className="paper-detail-section">
          <h2>Topics</h2>
          <div className="topics-list">
            <span className="topic-badge">Machine Learning</span>
            <span className="topic-badge">NLP</span>
            <span className="topic-badge">Deep Learning</span>
            <span className="topic-badge">Transformers</span>
            <span className="topic-badge">Computer Science</span>
          </div>
        </div>

        <div className="paper-actions-detail">
          <button
            className="btn btn-primary"
            onClick={() => console.log("Open full paper")}
          >
            📖 Read Full Paper
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => console.log("Save paper")}
          >
            💾 Save to Library
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => console.log("Email paper")}
          >
            📧 Email to Myself
          </button>
        </div>

        <div className="related-papers">
          <h2>Related Papers</h2>
          <div className="related-list">
            <div className="related-item">
              <p>Attention is All You Need</p>
              <p className="related-authors">Vaswani et al., 2017</p>
            </div>
            <div className="related-item">
              <p>BERT: Pre-training of Deep Bidirectional Transformers</p>
              <p className="related-authors">Devlin et al., 2018</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
