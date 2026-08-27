import { useState } from "react";

export default function InterestSelection({ onNavigate }) {
  const interests = [
    "Biology",
    "Chemistry",
    "Physics",
    "Computer Science",
    "Mathematics",
    "Medicine",
    "Psychology",
    "Environmental Science",
    "Neuroscience",
    "Astronomy",
    "Engineering",
    "Economics",
  ];

  const [selectedInterests, setSelectedInterests] = useState([]);

  const toggleInterest = (interest) => {
    setSelectedInterests((current) =>
      current.includes(interest)
        ? current.filter((item) => item !== interest)
        : [...current, interest],
    );
  };

  return (
    <div className="interest-selection-page">
      <div className="interest-container">
        <h1>Select Your Research Interests</h1>
        <p className="subtitle">
          Choose at least 3 topics you're interested in
        </p>

        <div className="interests-grid">
          {interests.map((interest) => (
            <button
              key={interest}
              className={
                selectedInterests.includes(interest)
                  ? "interest-tag selected"
                  : "interest-tag"
              }
              onClick={() => toggleInterest(interest)}
            >
              {interest}
            </button>
          ))}
        </div>

        <div className="expertise-section">
          <h3>What's your expertise level?</h3>
          <div className="expertise-options">
            <label className="radio-option">
              <input type="radio" name="expertise" value="beginner" />
              <span>Beginner - New to research</span>
            </label>
            <label className="radio-option">
              <input type="radio" name="expertise" value="intermediate" />
              <span>Intermediate - Some research experience</span>
            </label>
            <label className="radio-option">
              <input type="radio" name="expertise" value="advanced" />
              <span>Advanced - Actively conducting research</span>
            </label>
          </div>
        </div>

        <button
          className="btn btn-primary"
          onClick={() => onNavigate("tutorial")}
          disabled={selectedInterests.length < 3}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
