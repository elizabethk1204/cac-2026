import { useMemo, useState } from "react";
import { useNavigate } from "react-router";

const quizQuestions = [
  {
    id: 1,
    question: "What is the main advantage of transformer-based models in this paper?",
    options: [
      "They require zero training data",
      "They improve performance across many NLP tasks through attention and transfer learning",
      "They are only used for translation",
      "They remove the need for human interpretation",
    ],
    answer: 1,
  },
  {
    id: 2,
    question: "Which issue is specifically named as a challenge in scale-up?",
    options: [
      "Data duplication",
      "Overly simple datasets",
      "Model efficiency and interpretability",
      "Lack of attention mechanisms",
    ],
    answer: 2,
  },
  {
    id: 3,
    question: "Why is transfer learning highlighted as important?",
    options: [
      "It helps models adapt quickly to new tasks with pretraining",
      "It replaces the need for all evaluation metrics",
      "It reduces the need for any reading comprehension",
      "It eliminates the need for large-scale data",
    ],
    answer: 0,
  },
  {
    id: 4,
    question: "What is the best way to interpret the paper's findings?",
    options: [
      "As proof that NLP research is finished",
      "As evidence that architecture, scale, and adaptation work together to improve performance",
      "As a sign that all benchmark tasks are irrelevant",
      "As evidence that only enormous models matter",
    ],
    answer: 1,
  },
  {
    id: 5,
    question: "Which statement best matches the paper's conclusion?",
    options: [
      "Language models are not useful in practice",
      "The field is limited to a single application",
      "Transformer models offer meaningful gains but still require thoughtful design, evaluation, and ethics",
      "All natural language tasks are solved by one model",
    ],
    answer: 2,
  },
];

export default function Quiz() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(() => {
    const totalCorrect = quizQuestions.reduce((count, question) => {
      return count + (answers[question.id] === question.answer ? 1 : 0);
    }, 0);

    return Math.round((totalCorrect / quizQuestions.length) * 100);
  }, [answers]);

  const passed = score >= 75;

  const handleSelect = (questionId, selectedIndex) => {
    setAnswers((current) => ({ ...current, [questionId]: selectedIndex }));
  };

  const shortAnswerPrompts = [
    "In one sentence, explain why transfer learning matters for research work.",
    "What would you want to investigate next after reading this paper?",
  ];

  return (
    <div className="min-h-screen bg-base-100 px-5 py-8 text-base-content">
      <div className="mx-auto max-w-4xl">
        <button className="btn btn-ghost mb-6" onClick={() => navigate("/paper")}>
          ← Back to paper
        </button>

        <div className="rounded-[1.75rem] border border-base-content/10 bg-base-200 p-6 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Check for understanding
          </p>
          <h1 className="mt-3 text-3xl font-black tracking-tight">Quiz</h1>
          <p className="mt-2 text-base-content/70">
            Score 75% or higher to unlock community discussion.
          </p>
        </div>

        <div className="mt-6 space-y-6">
          {quizQuestions.map((question, questionIndex) => (
            <div
              key={question.id}
              className="rounded-[1.5rem] border border-base-content/10 bg-base-100 p-5 shadow-sm"
            >
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
                Question {questionIndex + 1}
              </p>
              <h2 className="mt-3 text-xl font-bold">{question.question}</h2>
              <div className="mt-4 space-y-3">
                {question.options.map((option, optionIndex) => (
                  <label
                    key={option}
                    className={
                      "flex cursor-pointer items-start gap-3 rounded-2xl border p-3 " +
                      (answers[question.id] === optionIndex
                        ? "border-primary bg-primary/5"
                        : "border-base-content/10 bg-base-200")
                    }
                  >
                    <input
                      type="radio"
                      name={`question-${question.id}`}
                      className="radio radio-primary mt-1"
                      checked={answers[question.id] === optionIndex}
                      onChange={() => handleSelect(question.id, optionIndex)}
                    />
                    <span className="leading-6 text-base-content/80">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}

          {shortAnswerPrompts.map((prompt, index) => (
            <div
              key={prompt}
              className="rounded-[1.5rem] border border-base-content/10 bg-base-100 p-5 shadow-sm"
            >
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
                Short answer {index + 1}
              </p>
              <h2 className="mt-3 text-xl font-bold">{prompt}</h2>
              <textarea
                className="textarea textarea-bordered mt-4 min-h-24 w-full"
                placeholder="Write a brief response..."
              />
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-[1.75rem] border border-base-content/10 bg-base-200 p-5 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <button className="btn btn-primary" onClick={() => setSubmitted(true)}>
              Submit quiz
            </button>
            {submitted && (
              <div className="text-right">
                <p className="text-sm uppercase tracking-[0.2em] text-base-content/60">
                  Score
                </p>
                <p className="text-3xl font-black text-primary">{score}%</p>
              </div>
            )}
          </div>

          {submitted && (
            <div className="mt-4 rounded-2xl border border-base-content/10 bg-base-100 p-4">
              {passed ? (
                <div>
                  <p className="text-lg font-bold text-success">Passed — you unlocked community discussion.</p>
                  <button
                    className="btn btn-success mt-3"
                    onClick={() => navigate("/community")}
                  >
                    Join discussion
                  </button>
                </div>
              ) : (
                <p className="text-lg font-bold text-warning">
                  Not yet — review the paper and try again to reach 75%.
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
