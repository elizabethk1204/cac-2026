export default function Welcome({ onNavigate }) {
  return (
    <div className="welcome-page">
      <div className="welcome-container">
        <h1>Welcome to PaperFlow</h1>
        <p className="subtitle">
          Discover and manage scientific literature like never before
        </p>
        <div className="welcome-description">
          <p>
            PaperFlow makes scientific research accessible, engaging, and fun.
            Scroll through curated paper summaries, build your reading habits,
            and discover knowledge across any field.
          </p>
        </div>
        <div className="welcome-features">
          <div className="feature">
            <span className="feature-icon">📚</span>
            <h3>Smart Recommendations</h3>
            <p>AI-powered suggestions based on your interests</p>
          </div>
          <div className="feature">
            <span className="feature-icon">💾</span>
            <h3>Save & Organize</h3>
            <p>Multiple ways to save and organize papers</p>
          </div>
          <div className="feature">
            <span className="feature-icon">🔗</span>
            <h3>Easy Access</h3>
            <p>Direct links to full research papers</p>
          </div>
        </div>
        <button
          className="btn btn-primary"
          onClick={() => onNavigate("register")}
        >
          Get Started
        </button>
        <p className="login-link">
          Already have an account?{" "}
          <button type="button" onClick={() => onNavigate("feed")}>
            Sign In
          </button>
        </p>
      </div>
    </div>
  );
}
