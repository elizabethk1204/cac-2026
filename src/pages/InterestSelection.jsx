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
    <div className="grid min-h-screen place-items-center bg-base-200 px-5 py-8">
      <div className="card w-full max-w-4xl border border-base-300 bg-base-100 shadow-xl">
        <div className="card-body p-6 sm:p-10">
          <h1 className="text-center text-3xl font-black text-primary sm:text-4xl">
            Select Your Research Interests
          </h1>
          <p className="mb-8 text-center text-base-content/60">
            Choose at least 3 topics you're interested in
          </p>

          <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {interests.map((interest) => (
              <button
                key={interest}
                className={
                  selectedInterests.includes(interest)
                    ? "btn btn-secondary"
                    : "btn btn-outline"
                }
                onClick={() => toggleInterest(interest)}
              >
                {interest}
              </button>
            ))}
          </div>

          <div className="mb-8">
            <h3 className="mb-3 font-bold">What's your expertise level?</h3>
            <div className="grid gap-3">
              <label className="label cursor-pointer justify-start gap-3">
                <input
                  className="radio radio-primary"
                  type="radio"
                  name="expertise"
                  value="beginner"
                />
                <span>Beginner - New to research</span>
              </label>
              <label className="label cursor-pointer justify-start gap-3">
                <input
                  className="radio radio-primary"
                  type="radio"
                  name="expertise"
                  value="intermediate"
                />
                <span>Intermediate - Some research experience</span>
              </label>
              <label className="label cursor-pointer justify-start gap-3">
                <input
                  className="radio radio-primary"
                  type="radio"
                  name="expertise"
                  value="advanced"
                />
                <span>Advanced - Actively conducting research</span>
              </label>
            </div>
          </div>

          <button
            className="btn btn-primary w-full"
            onClick={() => onNavigate("tutorial")}
            disabled={selectedInterests.length < 3}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
