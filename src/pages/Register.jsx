export default function Register({ onNavigate }) {
  return (
    <div className="grid min-h-screen place-items-center bg-base-200 px-5 py-8">
      <div className="card w-full max-w-lg border border-base-300 bg-base-100 shadow-xl">
        <div className="card-body p-6 sm:p-10">
          <h1 className="mb-6 text-center text-3xl font-black text-primary">
            Create Your Account
          </h1>
          <form className="grid gap-4">
            <div className="form-control">
              <label className="label" htmlFor="name">
                <span className="label-text font-bold">Full Name</span>
              </label>
              <input
                className="input input-bordered w-full"
                type="text"
                id="name"
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-control">
              <label className="label" htmlFor="email">
                <span className="label-text font-bold">Email</span>
              </label>
              <input
                className="input input-bordered w-full"
                type="email"
                id="email"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-control">
              <label className="label" htmlFor="password">
                <span className="label-text font-bold">Password</span>
              </label>
              <input
                className="input input-bordered w-full"
                type="password"
                id="password"
                placeholder="Create a password"
              />
            </div>

            <div className="form-control">
              <label className="label" htmlFor="confirm-password">
                <span className="label-text font-bold">Confirm Password</span>
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
              className="btn btn-primary mt-2 w-full"
              onClick={() => onNavigate("interests")}
            >
              Next
            </button>
          </form>

          <p className="mt-5 text-center text-base-content/60">
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
