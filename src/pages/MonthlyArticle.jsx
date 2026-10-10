import { useNavigate } from "react-router";

export default function MonthlyArticle() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-base-100 px-5 py-8 text-base-content">
      <div className="mx-auto max-w-4xl">
        <button className="btn btn-ghost mb-6" onClick={() => navigate("/feed")}>
          ← Back to feed
        </button>

        <div className="rounded-[1.75rem] border border-base-content/10 bg-base-200 p-6 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Monthly spotlight
          </p>
          <h1 className="mt-3 text-4xl font-black tracking-tight">
            Scientific discovery made approachable
          </h1>
          <p className="mt-4 text-base-content/70">
            This month&apos;s paper highlights how accessible summaries and guided reading can help learners stay engaged with research without getting lost in technical language.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[1.5rem] bg-base-100 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                Featured paper
              </p>
              <h2 className="mt-3 text-2xl font-black">A New Perspective on Scientific Discovery</h2>
              <p className="mt-2 text-base-content/70">
                Wilson, T., Adeyemi, K., Rossi, M. · Science Advances · 2024
              </p>
              <ul className="mt-4 space-y-2 text-base-content/80">
                <li>• Data-driven discovery reveals overlooked research connections</li>
                <li>• Interdisciplinary teams create broader innovation opportunities</li>
                <li>• Open scholarship accelerates meaningful progress</li>
              </ul>
            </div>

            <div className="rounded-[1.5rem] bg-primary/5 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Why it matters
              </p>
              <p className="mt-3 leading-7 text-base-content/80">
                By translating research into approachable summaries, students and researchers can identify meaningful ideas earlier and build stronger reading habits over time.
              </p>
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <button className="btn btn-primary" onClick={() => navigate("/paper")}>
              Read now
            </button>
            <button className="btn btn-outline" onClick={() => navigate("/feed")}>
              Explore more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
