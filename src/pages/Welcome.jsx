export default function Welcome({ onNavigate }) {
  return (
    <div className="grid min-h-screen place-items-center bg-base-200 px-5 py-8">
      <div className="card w-full max-w-3xl border border-base-300 bg-base-100 shadow-xl">
        <div className="card-body items-center p-8 text-center sm:p-14">
          <h1 className="text-4xl font-black tracking-tight text-primary sm:text-6xl">
            Welcome to PaperFlow
          </h1>
          <p className="text-lg text-base-content/60">
            Discover and manage scientific literature like never before
          </p>
          <div className="my-6 max-w-xl text-base-content/70">
            <p className="leading-7">
              PaperFlow makes scientific research accessible, engaging, and fun.
              Scroll through curated paper summaries, build your reading habits,
              and discover knowledge across any field.
            </p>
          </div>
          <div className="my-8 grid w-full gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-base-200 p-4">
              <span className="mb-2 block text-4xl">📚</span>
              <h3>Smart Recommendations</h3>
              <p>AI-powered suggestions based on your interests</p>
            </div>
            <div className="rounded-2xl bg-base-200 p-4">
              <span className="mb-2 block text-4xl">💾</span>
              <h3>Save & Organize</h3>
              <p>Multiple ways to save and organize papers</p>
            </div>
            <div className="rounded-2xl bg-base-200 p-4">
              <span className="mb-2 block text-4xl">🔗</span>
              <h3>Easy Access</h3>
              <p>Direct links to full research papers</p>
            </div>
          </div>
          <button
            className="btn btn-primary w-full max-w-sm"
            onClick={() => onNavigate("register")}
          >
            Get Started
          </button>
          <p className="mt-5 text-base-content/60">
            Already have an account?{" "}
            <button type="button" onClick={() => onNavigate("feed")}>
              Sign In
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
