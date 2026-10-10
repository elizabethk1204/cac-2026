export default function Register({ onNavigate }) {
  return (
    <div className="grid min-h-screen place-items-center bg-base-100 px-5 py-8 text-base-content">
      <div className="w-full max-w-xl rounded-[2rem] border border-base-content/10 bg-base-100 p-1 shadow-xl">
        <div className="rounded-[1.7rem] border border-base-content/10 bg-base-200 p-6 sm:p-10">
          <div className="mb-8 text-center">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-primary">
              Create account
            </p>
            <h1 className="text-3xl font-black tracking-[-0.05em] text-base-content sm:text-4xl">
              Start your research habit.
            </h1>
          </div>

          <form className="grid gap-4">
            <div className="form-control">
              <label className="label px-0 pb-2" htmlFor="name">
                <span className="label-text font-semibold text-base-content/80">Full Name</span>
              </label>
              <input
                className="input input-bordered w-full"
                type="text"
                id="name"
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-control">
              <label className="label px-0 pb-2" htmlFor="email">
                <span className="label-text font-semibold text-base-content/80">Email</span>
              </label>
              <input
                className="input input-bordered w-full"
                type="email"
                id="email"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-control">
              <label className="label px-0 pb-2" htmlFor="password">
                <span className="label-text font-semibold text-base-content/80">Password</span>
              </label>
              <input
                className="input input-bordered w-full"
                type="password"
                id="password"
                placeholder="Create a password"
              />
            </div>

            <div className="form-control">
              <label className="label px-0 pb-2" htmlFor="confirm-password">
                <span className="label-text font-semibold text-base-content/80">Confirm Password</span>
              </label>
              <input
                className="input input-bordered w-full"
                type="password"
                id="confirm-password"
                placeholder="Confirm your password"
              />
            </div>

            <button
              type="button"
              className="btn btn-primary mt-2 h-12 min-h-12 w-full rounded-full"
              onClick={() => onNavigate("interests")}
            >
              Next
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-base-content/60">
            Already have an account?{" "}
            <button
              type="button"
              className="font-semibold text-primary underline-offset-4 hover:underline"
              onClick={() => onNavigate("feed")}
            >
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
