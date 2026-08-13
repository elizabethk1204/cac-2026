export default function Settings() {
  return (
    <div className="settings-page">
      <button className="back-btn" onClick={() => console.log("Go back")}>
        ← Back to Profile
      </button>

      <div className="settings-container">
        <h1>Account Settings</h1>

        <div className="settings-section">
          <h2>Profile Information</h2>
          <div className="settings-form">
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" defaultValue="Elizabeth Kim" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" defaultValue="elizabeth@example.com" />
            </div>
            <div className="form-group">
              <label>Bio</label>
              <textarea placeholder="Tell us about yourself..."></textarea>
            </div>
            <button className="btn btn-secondary">Update Profile</button>
          </div>
        </div>

        <div className="settings-section">
          <h2>Notification Preferences</h2>
          <div className="settings-form">
            <label className="checkbox-option">
              <input type="checkbox" defaultChecked />
              <span>Email digests of recommended papers</span>
            </label>
            <div className="form-group indent">
              <label>Frequency</label>
              <select>
                <option>Daily</option>
                <option>Weekly</option>
                <option>Monthly</option>
              </select>
            </div>
            <label className="checkbox-option">
              <input type="checkbox" defaultChecked />
              <span>Notify me when papers I saved get cited</span>
            </label>
            <label className="checkbox-option">
              <input type="checkbox" />
              <span>Notify me about trending papers in my fields</span>
            </label>
          </div>
        </div>

        <div className="settings-section">
          <h2>Research Interests</h2>
          <div className="settings-form">
            <p>Current interests: Computer Science, Biology, Physics</p>
            <button className="btn btn-secondary">Edit Interests</button>
          </div>
        </div>

        <div className="settings-section">
          <h2>Privacy & Security</h2>
          <div className="settings-form">
            <button className="btn btn-secondary">Change Password</button>
            <button className="btn btn-secondary">
              Two-Factor Authentication
            </button>
            <label className="checkbox-option">
              <input type="checkbox" />
              <span>Make my profile public</span>
            </label>
          </div>
        </div>

        <div className="settings-section">
          <h2>Data & Storage</h2>
          <div className="settings-form">
            <p>Storage used: 45 MB / 5 GB</p>
            <button className="btn btn-secondary">Download My Data</button>
            <button className="btn btn-secondary">Export Papers</button>
          </div>
        </div>

        <div className="settings-section danger-zone">
          <h2>Danger Zone</h2>
          <div className="settings-form">
            <button className="btn btn-danger">Delete Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}
