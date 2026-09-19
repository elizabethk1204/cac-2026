import { useNavigate } from "react-router";

export default function Settings() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-base-200 px-5 py-8">
      <button
        className="mb-6 font-bold text-primary hover:underline"
        onClick={() => navigate("/profile")}
      >
        ← Back to Profile
      </button>

      <div className="mx-auto max-w-3xl">
        <h1 className="mb-6 text-4xl font-black text-primary">
          Account Settings
        </h1>

        <div className="alert mb-4 border border-base-300 bg-base-100 shadow-lg">
          <div>
            <h2 className="font-black">Account Management</h2>
            <p>
              Manage your profile, notifications, security, and PaperFlow data.
            </p>
          </div>
        </div>

        <div className="card mb-4 border border-base-300 bg-base-100 shadow-lg">
          <div className="card-body">
            <h2 className="card-title">Profile Information</h2>
            <div className="grid gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  className="input input-bordered"
                  type="text"
                  defaultValue="Elizabeth Kim"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  className="input input-bordered"
                  type="email"
                  defaultValue="elizabeth@example.com"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Bio</span>
                </label>
                <textarea
                  className="textarea textarea-bordered"
                  placeholder="Tell us about yourself..."
                ></textarea>
              </div>
              <button className="btn btn-secondary w-fit">
                Update Profile
              </button>
            </div>
          </div>
        </div>

        <div className="card mb-4 border border-base-300 bg-base-100 shadow-lg">
          <div className="card-body">
            <h2 className="card-title">Notification Preferences</h2>
            <div className="grid gap-4">
              <label className="label cursor-pointer justify-start gap-3">
                <input
                  className="checkbox checkbox-primary"
                  type="checkbox"
                  defaultChecked
                />
                <span>Email digests of recommended papers</span>
              </label>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Frequency</span>
                </label>
                <select className="select select-bordered">
                  <option>Daily</option>
                  <option>Weekly</option>
                  <option>Monthly</option>
                </select>
              </div>
              <label className="label cursor-pointer justify-start gap-3">
                <input
                  className="checkbox checkbox-primary"
                  type="checkbox"
                  defaultChecked
                />
                <span>Notify me when papers I saved get cited</span>
              </label>
              <label className="label cursor-pointer justify-start gap-3">
                <input className="checkbox checkbox-primary" type="checkbox" />
                <span>Notify me about trending papers in my fields</span>
              </label>
            </div>
          </div>
        </div>

        <div className="card mb-4 border border-base-300 bg-base-100 shadow-lg">
          <div className="card-body">
            <h2 className="card-title">Research Interests</h2>
            <div className="grid gap-4">
              <p>Current interests: Computer Science, Biology, Physics</p>
              <button className="btn btn-secondary">Edit Interests</button>
            </div>
          </div>
        </div>

        <div className="card mb-4 border border-base-300 bg-base-100 shadow-lg">
          <div className="card-body">
            <h2 className="card-title">Privacy & Security</h2>
            <div className="grid gap-4">
              <button className="btn btn-secondary">Change Password</button>
              <button className="btn btn-secondary">
                Two-Factor Authentication
              </button>
              <label className="label cursor-pointer justify-start gap-3">
                <input className="checkbox checkbox-primary" type="checkbox" />
                <span>Make my profile public</span>
              </label>
            </div>
          </div>
        </div>

        <div className="card mb-4 border border-base-300 bg-base-100 shadow-lg">
          <div className="card-body">
            <h2 className="card-title">Data & Storage</h2>
            <div className="grid gap-4">
              <p>Storage used: 45 MB / 5 GB</p>
              <button className="btn btn-secondary">Download My Data</button>
              <button className="btn btn-secondary">Export Papers</button>
            </div>
          </div>
        </div>

        <div className="card border border-error bg-base-100 shadow-lg">
          <div className="card-body">
            <h2 className="card-title text-error">Danger Zone</h2>
            <div className="grid gap-4">
              <button className="btn btn-error w-fit">Delete Account</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
