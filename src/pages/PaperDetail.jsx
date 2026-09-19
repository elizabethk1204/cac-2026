import { useNavigate } from "react-router";

export default function PaperDetail() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-base-200 px-5 py-8">
      <button
        className="mb-6 font-bold text-primary hover:underline"
        onClick={() => navigate("/feed")}
      >
        ← Back to Feed
      </button>

      <div className="card mx-auto max-w-4xl border border-base-300 bg-base-100 shadow-xl">
        <div className="card-body p-6 sm:p-10">
          <div className="border-b border-base-300 pb-8 text-center">
            <div className="mb-5 text-6xl">🤖</div>
            <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
              Deep Learning for Natural Language Processing
            </h1>
            <p className="mt-3 text-base-content/60">
              Smith, J., Johnson, M., Williams, R.
            </p>
            <p className="text-base-content/60">
              Published in: Nature Machine Intelligence
            </p>
            <p className="text-sm text-base-content/50">June 15, 2024</p>
          </div>

          <div className="my-8 grid grid-cols-3 gap-4 text-center">
            <div>
              <span className="block text-2xl font-black text-primary">
                2,340
              </span>
              <span className="text-xs text-base-content/60">Citations</span>
            </div>
            <div>
              <span className="block text-2xl font-black text-primary">
                8.5/10
              </span>
              <span className="text-xs text-base-content/60">Rating</span>
            </div>
            <div>
              <span className="block text-2xl font-black text-primary">
                12 min
              </span>
              <span className="text-xs text-base-content/60">Read Time</span>
            </div>
          </div>

          <div className="my-8">
            <h2 className="mb-3 text-xl font-black">Abstract</h2>
            <p className="leading-7 text-base-content/70">
              This comprehensive study examines the evolution of transformer
              architectures and their applications in modern natural language
              processing systems. We discuss key innovations including attention
              mechanisms, fine-tuning strategies, and practical implementations
              across various NLP tasks.
            </p>
          </div>

          <div className="my-8">
            <h2 className="mb-3 text-xl font-black">Key Findings</h2>
            <ul className="grid gap-2 pl-5 leading-7 text-base-content/70">
              <li>
                Transformer models outperform traditional RNN-based approaches
              </li>
              <li>Transfer learning significantly reduces training time</li>
              <li>Multi-task training improves generalization</li>
              <li>Model size correlates strongly with performance gains</li>
            </ul>
          </div>

          <div className="my-8">
            <h2 className="mb-3 text-xl font-black">Topics</h2>
            <div className="flex flex-wrap gap-2">
              <span className="badge badge-secondary badge-outline">
                Machine Learning
              </span>
              <span className="badge badge-secondary badge-outline">NLP</span>
              <span className="badge badge-secondary badge-outline">
                Deep Learning
              </span>
              <span className="badge badge-secondary badge-outline">
                Transformers
              </span>
              <span className="badge badge-secondary badge-outline">
                Computer Science
              </span>
            </div>
          </div>

          <div className="my-8 grid gap-3">
            <button
              className="btn btn-primary"
              onClick={() => console.log("Open full paper")}
            >
              📖 Read Full Paper
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => console.log("Save paper")}
            >
              💾 Save to Library
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => console.log("Email paper")}
            >
              📧 Email to Myself
            </button>
          </div>

          <div className="border-t border-base-300 pt-8">
            <h2 className="mb-4 text-xl font-black">Related Papers</h2>
            <div className="grid gap-3">
              <div className="rounded-xl border border-base-300 bg-base-200 p-4">
                <p>Attention is All You Need</p>
                <p className="text-sm text-base-content/60">
                  Vaswani et al., 2017
                </p>
              </div>
              <div className="rounded-xl border border-base-300 bg-base-200 p-4">
                <p>BERT: Pre-training of Deep Bidirectional Transformers</p>
                <p className="text-sm text-base-content/60">
                  Devlin et al., 2018
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
