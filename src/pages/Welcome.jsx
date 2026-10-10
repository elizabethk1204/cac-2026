export default function Welcome({ onNavigate }) {
  return (
    <div className="min-h-screen bg-base-100 px-5 py-8 text-base-content">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col justify-center">
        <header className="mb-10 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-base-content/10 bg-base-200 text-lg font-bold text-primary">
              P
            </div>
            <span className="text-xl font-semibold uppercase tracking-[0.2em] text-base-content/80">
              PaperFlow
            </span>
          </div>
          <button
            type="button"
            className="btn btn-ghost"
            onClick={() => onNavigate("feed")}
          >
            Sign in
          </button>
        </header>

        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1.3fr] lg:gap-4">
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.28em] text-primary">
              Research for everyone
            </p>
            <h1 className="text-5xl font-black tracking-[-0.06em] text-base-content sm:text-6xl xl:text-7xl">
              Make research feel like your next discovery.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-base-content/70 lg:text-xl">
              Discover papers that match your interests, turn dense research into clear reading, and build a habit that keeps learning fun.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:items-start">
              <button
                className="btn btn-primary h-14 min-h-14 rounded-full px-8 text-base font-semibold"
                onClick={() => onNavigate("register")}
              >
                Get started
              </button>
              <button
                type="button"
                className="btn btn-outline h-14 min-h-14 rounded-full px-8 text-base font-semibold"
                onClick={() => onNavigate("feed")}
              >
                Explore feed
              </button>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-5 text-sm text-base-content/50 lg:justify-start">
              <span>AI summaries</span>
              <span className="h-1 w-1 rounded-full bg-base-content/30" />
              <span>Curated topics</span>
              <span className="h-1 w-1 rounded-full bg-base-content/30" />
              <span>Reading streaks</span>
            </div>
          </div>

          <div className="order-1 flex justify-center lg:order-2">
            <div className="relative h-[340px] w-[420px] max-w-full" aria-label="PaperFlow hero illustration">
              <div className="absolute inset-x-12 top-0 h-52 rounded-[2.2rem] border border-base-content/10 bg-base-200 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.02)]" />
              <div className="absolute inset-x-4 bottom-1 h-52 rounded-[2.2rem] border border-base-content/10 bg-base-300" />
              <div className="absolute inset-x-10 bottom-8 h-40 rounded-[2rem] border border-base-content/10 bg-base-100" />
              <div className="absolute inset-x-16 bottom-10 h-32 rounded-[1.5rem] border border-dashed border-base-content/15 bg-base-200" />
              <div className="absolute inset-x-10 top-10 h-40 rounded-[2rem] border border-dashed border-base-content/10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
