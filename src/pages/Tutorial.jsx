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
    <div className="min-h-screen bg-base-100 px-5 py-8 text-base-content">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 text-center">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-primary">
            Quick start
          </p>
          <h1 className="text-4xl font-black tracking-[-0.06em] text-base-content">
            How to use PaperFlow
          </h1>
        </div>

        <div className="mb-8 grid gap-5 sm:grid-cols-2">
          {tutorials.map((tutorial, index) => (
            <div
              key={index}
              className="rounded-[1.75rem] border border-base-content/10 bg-base-100 p-1 shadow-sm"
            >
              <div className="card h-full rounded-[1.45rem] border border-base-content/10 bg-base-200 shadow-none">
                <div className="card-body items-center text-center">
                  <div className="mb-2 grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-3xl">
                    {tutorial.icon}
                  </div>
                  <h3 className="text-xl font-bold text-base-content">{tutorial.title}</h3>
                  <p className="text-base-content/70">{tutorial.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-8 rounded-[1.75rem] border border-base-content/10 bg-base-100 p-1 shadow-sm">
          <div className="rounded-[1.45rem] border border-base-content/10 bg-base-200 p-6">
            <h3 className="mb-5 text-2xl font-bold text-base-content">Email notification settings</h3>
            <div className="form-control">
              <label className="label px-0 pb-2" htmlFor="email-frequency">
                <span className="label-text font-semibold text-base-content/80">
                  How often should we send you articles?
                </span>
              </label>
              <select className="select select-bordered w-full" id="email-frequency">
                <option>Daily Digest</option>
                <option>Weekly Digest</option>
                <option>Never - I'll save manually</option>
              </select>
            </div>
            <div className="form-control mt-4">
              <label className="label px-0 pb-2" htmlFor="email-time">
                <span className="label-text font-semibold text-base-content/80">Preferred send time:</span>
              </label>
              <input
                className="input input-bordered"
                type="time"
                id="email-time"
                defaultValue="09:00"
              />
            </div>
            <div className="form-control mt-4">
              <label className="label px-0 pb-2" htmlFor="email-subject">
                <span className="label-text font-semibold text-base-content/80">Email subject line:</span>
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
          className="btn btn-primary mt-8 h-12 min-h-12 w-full rounded-full"
          onClick={() => onNavigate("feed")}
        >
          Start exploring
        </button>
      </div>
    </div>
  );
}
