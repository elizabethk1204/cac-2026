export default function Tutorial({ onNavigate }) {
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
      title: "Rating & Learning",
      description:
        "Rate papers to train our recommendation algorithm. The more you engage, the better suggestions you'll get.",
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
    <div className="min-h-screen bg-base-200 px-5 py-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-8 text-center text-4xl font-black text-primary">
          How to Use PaperFlow
        </h1>

        <div className="mb-8 grid gap-5 sm:grid-cols-2">
          {tutorials.map((tutorial, index) => (
            <div
              key={index}
              className="card border border-base-300 bg-base-100 shadow-lg"
            >
              <div className="card-body items-center text-center">
                <div className="text-4xl">{tutorial.icon}</div>
                <h3>{tutorial.title}</h3>
                <p>{tutorial.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="card mb-8 border border-base-300 bg-base-100 shadow-lg">
          <div className="card-body">
            <h3 className="card-title">Email Notification Settings</h3>
            <div className="form-control">
              <label className="label" htmlFor="email-frequency">
                <span className="label-text">
                  How often should we send you articles?
                </span>
              </label>
              <select
                className="select select-bordered w-full"
                id="email-frequency"
              >
                <option>Daily Digest</option>
                <option>Weekly Digest</option>
                <option>Never - I'll save manually</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label" htmlFor="email-time">
                <span className="label-text">Preferred send time:</span>
              </label>
              <input
                className="input input-bordered"
                type="time"
                id="email-time"
                defaultValue="09:00"
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="email-subject">
                <span className="label-text">Email subject line:</span>
              </label>
              <input
                className="input input-bordered"
                type="text"
                id="email-subject"
                placeholder="e.g., Weekly Research Digest"
                defaultValue="Weekly Research Digest"
              />
            </div>
          </div>
        </div>

        <button
          className="btn btn-primary w-full"
          onClick={() => onNavigate("feed")}
        >
          Start Exploring
        </button>
      </div>
    </div>
  );
}
