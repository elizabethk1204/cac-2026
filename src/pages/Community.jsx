import { useNavigate } from "react-router";

const discussion = [
  {
    id: 1,
    author: "Maya",
    time: "2h ago",
    body:
      "I love how this paper reframes AI-assisted reading as a learning tool rather than just a shortcut. The key idea is that it supports comprehension without replacing the reading process.",
    likes: 24,
  },
  {
    id: 2,
    author: "Jun",
    time: "1h ago",
    body:
      "The part about lexile-adjusted summaries is especially useful for undergrads. It makes the graphing and methods sections feel way more approachable.",
    likes: 15,
  },
  {
    id: 3,
    author: "Alyssa",
    time: "35m ago",
    body:
      "I would love to see a compare-and-contrast section between PubMed and Semantic Scholar sources for health-related papers. That would help with source confidence.",
    likes: 9,
  },
];

export default function Community() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-base-100 px-5 py-8 text-base-content">
      <div className="mx-auto max-w-5xl">
        <button className="btn btn-ghost mb-6" onClick={() => navigate("/paper")}>
          ← Back to paper
        </button>

        <div className="mb-6 rounded-[1.5rem] border border-base-content/10 bg-base-200 p-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Community discussion
          </p>
          <h1 className="mt-3 text-3xl font-black tracking-tight">
            Deep Learning for Natural Language Processing
          </h1>
          <p className="mt-2 text-base-content/70">
            Discuss the paper, ask questions, and share your takeaways.
          </p>
        </div>

        <div className="space-y-4">
          {discussion.map((comment) => (
            <div
              key={comment.id}
              className="rounded-[1.5rem] border border-base-content/10 bg-base-100 p-5 shadow-sm"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-primary/10 font-bold text-primary">
                    {comment.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold">{comment.author}</p>
                    <p className="text-sm text-base-content/50">{comment.time}</p>
                  </div>
                </div>
                <button className="btn btn-ghost btn-sm">♥ {comment.likes}</button>
              </div>
              <p className="mt-4 leading-7 text-base-content/80">{comment.body}</p>
              <div className="mt-4 flex gap-3">
                <button className="btn btn-ghost btn-sm">Reply</button>
                <button className="btn btn-ghost btn-sm">Share</button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-[1.5rem] border border-base-content/10 bg-base-200 p-5">
          <h2 className="mb-3 text-xl font-bold">Add a comment</h2>
          <textarea
            className="textarea textarea-bordered w-full min-h-28"
            placeholder="Share your thoughts on this paper..."
          />
          <div className="mt-4 flex justify-end">
            <button className="btn btn-primary">Post comment</button>
          </div>
        </div>
      </div>
    </div>
  );
}
