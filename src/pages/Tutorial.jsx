export default function Tutorial() {
  const tutorials = [
    {
      title: "Discovering Papers",
      description:
        "Scroll through your personalized feed to discover papers. Each card shows the title, authors, date, and a summary.",
      icon: "📖",
    },
    {
      title: "Saving Papers",
      description:
        "Save papers to your library, create custom collections, or email yourself article links for later reading.",
      icon: "💾",
    },
    {
      title: "Liking & Learning",
      description:
        "Like papers to train our recommendation algorithm. The more you engage, the better suggestions you'll get.",
      icon: "👍",
    },
    {
      title: "Managing Your Library",
      description:
        "Access your profile to view saved papers, organize them into collections, and manage your preferences.",
      icon: "📚",
    },
  ];

  return (
    <div className="tutorial-page">
      <div className="tutorial-container">
        <h1>How to Use PaperFlow</h1>

        <div className="tutorial-grid">
          {tutorials.map((tutorial, index) => (
            <div key={index} className="tutorial-card">
              <div className="tutorial-icon">{tutorial.icon}</div>
              <h3>{tutorial.title}</h3>
              <p>{tutorial.description}</p>
            </div>
          ))}
        </div>

        <div className="email-settings">
          <h3>Email Notification Settings</h3>
          <div className="setting-option">
            <label htmlFor="email-frequency">
              How often should we send you articles?
            </label>
            <select id="email-frequency">
              <option>Daily Digest</option>
              <option>Weekly Digest</option>
              <option>Never - I'll save manually</option>
            </select>
          </div>
          <div className="setting-option">
            <label htmlFor="email-time">Preferred send time:</label>
            <input type="time" id="email-time" defaultValue="09:00" />
          </div>
          <div className="setting-option">
            <label htmlFor="email-subject">Email subject line:</label>
            <input
              type="text"
              id="email-subject"
              placeholder="e.g., Weekly Research Digest"
              defaultValue="Weekly Research Digest"
            />
          </div>
        </div>

        <button
          className="btn btn-primary"
          onClick={() => console.log("Go to Main Feed")}
        >
          Start Exploring
        </button>
      </div>
    </div>
  );
}
