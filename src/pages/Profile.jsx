export default function Profile() {
  return (
    <div className="min-h-screen bg-base-200 px-5 py-8">
      <div className="mx-auto max-w-5xl">
        <div className="card border border-base-300 bg-base-100 text-center shadow-xl">
          <div className="card-body items-center">
            <div className="mb-3 text-6xl">👤</div>
            <h1 className="text-3xl font-black text-primary">Elizabeth Kim</h1>
            <p className="text-base-content/60">elizabeth@example.com</p>
            <div className="my-4 grid w-full max-w-lg grid-cols-3 gap-4">
              <div className="stat">
                <span className="block text-2xl font-black text-primary">
                  24
                </span>
                <span className="text-xs text-base-content/60">
                  Papers Saved
                </span>
              </div>
              <div className="stat">
                <span className="block text-2xl font-black text-primary">
                  12
                </span>
                <span className="text-xs text-base-content/60">
                  Collections
                </span>
              </div>
              <div className="stat">
                <span className="block text-2xl font-black text-primary">
                  156
                </span>
                <span className="text-xs text-base-content/60">
                  Papers Read
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="tabs tabs-boxed my-4 bg-base-100 p-2">
          <button className="tab tab-active">📚 Saved Papers</button>
          <button className="tab">📁 Collections</button>
          <button className="tab">📊 Statistics</button>
          <button className="tab">⚙️ Settings</button>
        </div>

        <div className="card mb-4 border border-base-300 bg-base-100 shadow-lg">
          <div className="card-body">
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl bg-base-200 p-4">
                <p className="text-xs font-bold uppercase tracking-widest text-primary">
                  Weekly streak
                </p>
                <strong>4 days</strong>
                <span>Best: 12 days</span>
              </div>
              <div className="rounded-xl bg-base-200 p-4">
                <p className="text-xs font-bold uppercase tracking-widest text-primary">
                  Weekly goal
                </p>
                <strong>3 / 5</strong>
                <span>papers read</span>
                <progress
                  className="progress progress-primary w-full"
                  value="60"
                  max="100"
                />
              </div>
              <div className="rounded-xl bg-base-200 p-4">
                <p className="text-xs font-bold uppercase tracking-widest text-primary">
                  Focus areas
                </p>
                <strong>3 topics</strong>
                <span>Personalized recommendations</span>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-4 border border-base-300 bg-base-100 shadow-lg">
          <div className="card-body">
            <h2 className="card-title">Interests & Expertise</h2>
            <p className="text-base-content/60">
              Your recommendations are tuned to your interests and experience.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="badge badge-secondary">Computer Science</span>
              <span className="badge badge-secondary">Biology</span>
              <span className="badge badge-secondary">Physics</span>
              <span className="badge badge-secondary">Intermediate</span>
            </div>
          </div>
        </div>

        <div className="card mb-4 border border-base-300 bg-base-100 shadow-lg">
          <div className="card-body">
            <h2 className="card-title">Recent Collections</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl bg-base-200 p-4 text-center">
                <div className="text-4xl">🧠</div>
                <h3>Neuroscience</h3>
                <p>8 papers</p>
              </div>
              <div className="rounded-xl bg-base-200 p-4 text-center">
                <div className="text-4xl">🤖</div>
                <h3>AI & ML</h3>
                <p>15 papers</p>
              </div>
              <div className="rounded-xl bg-base-200 p-4 text-center">
                <div className="text-4xl">🧬</div>
                <h3>Biotechnology</h3>
                <p>12 papers</p>
              </div>
              <div className="rounded-xl bg-base-200 p-4 text-center">
                <div className="text-4xl">➕</div>
                <h3>Create New</h3>
                <p>Collection</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card border border-base-300 bg-base-100 shadow-lg">
          <div className="card-body">
            <h2 className="card-title">Reading History</h2>
            <div className="grid gap-3">
              <div className="rounded-xl border-l-4 border-primary bg-base-200 p-4">
                <span className="badge badge-primary">Today</span>
                <p>Deep Learning for NLP</p>
                <p className="text-sm text-base-content/60">2 hours ago</p>
              </div>
              <div className="rounded-xl border-l-4 border-primary bg-base-200 p-4">
                <span className="badge badge-primary">Yesterday</span>
                <p>Quantum Computing: Opportunities and Challenges</p>
                <p className="text-sm text-base-content/60">1 day ago</p>
              </div>
              <div className="rounded-xl border-l-4 border-primary bg-base-200 p-4">
                <span className="badge badge-primary">Aug 10</span>
                <p>CRISPR Gene Editing: Advances and Ethical Considerations</p>
                <p className="text-sm text-base-content/60">3 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
