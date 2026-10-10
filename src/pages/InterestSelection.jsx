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
    <div className="grid min-h-screen place-items-center bg-base-100 px-5 py-8 text-base-content">
      <div className="w-full max-w-4xl rounded-[2rem] border border-base-content/10 bg-base-100 p-1 shadow-xl">
        <div className="rounded-[1.7rem] border border-base-content/10 bg-base-200 p-6 sm:p-10">
          <div className="mb-8 text-center">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-primary">
              Onboarding
            </p>
            <h1 className="text-3xl font-black tracking-[-0.05em] text-base-content sm:text-4xl">
              Select your research interests
            </h1>
            <p className="mt-3 text-base-content/60">
              Choose at least 3 topics you want to explore.
            </p>
          </div>

          <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {interests.map((interest) => (
              <button
                key={interest}
                className={
                  selectedInterests.includes(interest)
                    ? "btn btn-primary"
                    : "btn btn-outline"
                }
                onClick={() => toggleInterest(interest)}
              >
                {interest}
              </button>
            ))}
          </div>

          <div className="mb-8 rounded-2xl border border-base-content/10 bg-base-100 p-4">
            <h3 className="mb-4 text-lg font-bold text-base-content">What is your expertise level?</h3>
            <div className="grid gap-3">
              <label className="label cursor-pointer justify-start gap-3 rounded-xl border border-base-content/10 bg-base-200 p-3">
                <input className="radio radio-primary" type="radio" name="expertise" value="beginner" />
                <span className="text-base-content/80">Beginner — New to research</span>
              </label>
              <label className="label cursor-pointer justify-start gap-3 rounded-xl border border-base-content/10 bg-base-200 p-3">
                <input className="radio radio-primary" type="radio" name="expertise" value="intermediate" />
                <span className="text-base-content/80">Intermediate — Some research experience</span>
              </label>
              <label className="label cursor-pointer justify-start gap-3 rounded-xl border border-base-content/10 bg-base-200 p-3">
                <input className="radio radio-primary" type="radio" name="expertise" value="advanced" />
                <span className="text-base-content/80">Advanced — Actively conducting research</span>
              </label>
            </div>
          </div>

          <button
            className="btn btn-primary h-12 min-h-12 w-full rounded-full disabled:cursor-not-allowed disabled:opacity-40"
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
