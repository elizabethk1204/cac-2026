export default function Register() {
  return (
    <div className="register-page">
      <div className="register-container">
        <h1>Create Your Account</h1>
        <form className="register-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" placeholder="Enter your full name" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="your.email@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Create a password"
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirm your password"
            />
          </div>

          <button
            type="button"
            className="btn btn-primary"
            onClick={() => console.log("Go to Interests")}
          >
            Next
          </button>
        </form>

        <p className="login-link">
          Already have an account? <a href="#/login">Sign In</a>
        </p>
      </div>
    </div>
  );
}
