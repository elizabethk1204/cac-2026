import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { readLibrary, writeLibrary } from "../libraryStore";

const paperContent = {
  title: "Deep Learning for Natural Language Processing",
  authors: "Smith, J., Johnson, M., Williams, R.",
  journal: "Nature Machine Intelligence",
  date: "2024-06-15",
  topic: "Computer Science",
  source: "Semantic Scholar",
  lexileVersions: {
    "Middle School": [
      "Language models are computer systems that read huge amounts of text and learn patterns in how words are used. These systems can then help with tasks such as answering questions, classifying text, and writing summaries.",
      "The paper explains that transformer models are especially effective because they can focus on important parts of a sentence, not just the previous word. This allows them to understand context more deeply than older models based on recurrent processing.",
      "The researchers compare transformers with older neural networks and show that transformers perform better across many common language tasks. They also show that pretraining on lots of text can make a model much more useful for later tasks with less extra work.",
      "The findings suggest that strong language models depend on three important ingredients: better architecture, more data, and transfer learning. Even so, there are still challenges in making models efficient, fair, and understandable in real world use.",
    ],
    "High School": [
      "Language models are trained on very large collections of text so they can learn patterns in syntax, meaning, and context. Once trained, they can be adapted to many tasks, including summarization, classification, and translation.",
      "The paper focuses on transformer architectures, which use attention mechanisms to decide which parts of a sentence matter most at each step. This lets models identify relationships between words more effectively than older recurrent models.",
      "The authors evaluate transformers against prior model families on several benchmark tasks. Their results show that transformer-based systems consistently outperform earlier methods, especially when they are pretrained on large text corpora and fine-tuned for specific applications.",
      "The authors conclude that the combination of architecture, scale, and transfer learning is a major reason for the recent gains in language processing. At the same time, they note that issues related to efficiency, interpretability, and bias remain important concerns for future work.",
    ],
    College: [
      "Modern language models are trained on large-scale corpora and learn statistical regularities over token sequences. These systems capture syntactic and semantic relationships that enable strong performance across a diverse set of downstream tasks, including classification, generation, summarization, and translation.",
      "The core methodological contribution of the paper is its emphasis on transformer architectures, which model dependencies through attention mechanisms rather than sequential recurrence. By computing context-weighted relevance across tokens, transformers can capture long-range structure more effectively than recurrent alternatives.",
      "The experiments compare transformer-based methods to earlier neural approaches across multiple standard benchmarks. The results indicate that transformer models consistently achieve higher accuracy and better generalization, particularly when pretrained on broad corpora and subsequently adapted to task-specific objectives.",
      "The paper argues that the performance gains observed in recent NLP systems arise from the interaction between model design, dataset scale, and transfer learning. However, the authors also acknowledge unresolved challenges in scaling efficiency, improving interpretability, and mitigating representational bias in deployment contexts.",
    ],
    Original: [
      "Transformer architectures have become the dominant approach for a wide range of natural language processing tasks, enabling substantial gains through scalable attention mechanisms and transfer learning. These models are trained on large corpora and can be adapted to multiple downstream objectives with comparatively modest task-specific engineering.",
      "The paper reviews the empirical and theoretical reasons why attention-based models outperform earlier recurrent architectures. By allowing each token to attend to the full context window, transformers can capture long-range dependencies and represent context more flexibly than sequence-to-sequence models constrained by recurrence.",
      "Across classification, summarization, and translation benchmarks, the authors observed consistent improvements when transformer models were pretrained and then fine-tuned for task-specific use. Their results suggest that performance gains are driven not only by architectural changes, but also by model scale, data availability, and effective transfer learning.",
      "The authors conclude that the current era of NLP progress reflects a convergence of better architectures, larger datasets, and more efficient adaptation strategies. They also note that unresolved questions remain around model efficiency, interpretability, robustness, and fairness in real-world deployment.",
    ],
  },
};

const lexileOptions = ["Middle School", "High School", "College", "Original"];

export default function Paper() {
  const navigate = useNavigate();
  const location = useLocation();
  const paper = location.state?.paper;
  const library = readLibrary();
  const [selectedLexile, setSelectedLexile] = useState("High School");
  const [rating, setRating] = useState(
    paper ? library.ratings[paper.id] || 0 : library.ratings[1] || 0,
  );
  const title = paper?.title ?? paperContent.title;
  const authors = paper?.authors ?? paperContent.authors;
  const journal = paper?.journal ?? paperContent.journal;
  const date = paper?.date ?? paperContent.date;
  const topic = paper?.topic ?? paperContent.topic;
  const source = paper?.source ?? paperContent.source;
  const abstract =
    paper?.abstractQuote?.replace(/^"|"$/g, "") ?? paperContent.abstract;
  const hasRewrittenText = !paper || paper.id === 1;

  const updateRating = (nextRating) => {
    setRating(nextRating);
    const updatedLibrary = {
      ...library,
      ratings: { ...library.ratings, [paper?.id ?? 1]: nextRating },
    };
    writeLibrary(updatedLibrary);
  };

  return (
    <div className="min-h-screen bg-base-100 px-5 py-8 text-base-content">
      <div className="mx-auto max-w-5xl">
        <button className="btn btn-ghost mb-6" onClick={() => navigate("/feed")}>
          ← Back to feed
        </button>

        <div className="rounded-[1.75rem] border border-base-content/10 bg-base-200 p-6 shadow-sm">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                {topic} · {source}
              </p>
              <h1 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
                {title}
              </h1>
              <p className="mt-2 text-base-content/70">
                {authors} · {journal} · {date}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {lexileOptions.map((option) => (
                <button
                  key={option}
                  className={
                    selectedLexile === option
                      ? "btn btn-primary btn-sm"
                      : "btn btn-outline btn-sm"
                  }
                  onClick={() => setSelectedLexile(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[1.5rem] border border-base-content/10 bg-base-100 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                Abstract
              </p>
              <p className="mt-3 leading-7 text-base-content/80">
                {abstract}
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-base-content/10 bg-base-100 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Reading level
              </p>
              <p className="mt-3 text-2xl font-black text-base-content">
                {selectedLexile}
              </p>
              <p className="mt-2 text-sm text-base-content/70">
                The paper text is rewritten for the selected reading level.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-[1.75rem] border border-base-content/10 bg-base-100 p-6 shadow-sm">
          <h2 className="text-2xl font-black">Full paper rewrite</h2>
          <p className="mt-2 text-base-content/70">
            Reading level: <span className="font-bold text-primary">{selectedLexile}</span>
          </p>
          {hasRewrittenText ? (
            <div className="mt-5 space-y-5">
              {paperContent.lexileVersions[selectedLexile].map((paragraph, index) => (
                <div key={`${selectedLexile}-${index}`} className="rounded-[1.25rem] bg-base-200 p-4">
                  <p className="leading-8 text-base-content/80">{paragraph}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-5 rounded-[1.25rem] bg-base-200 p-4">
              <p className="font-bold">Full text rewrite unavailable</p>
              <p className="mt-2 leading-7 text-base-content/70">
                This feed entry includes an abstract and key findings, but not the source paper text needed for a full rewrite.
              </p>
              {paper.keyFindings && (
                <ul className="mt-4 list-disc space-y-2 pl-5 text-base-content/80">
                  {paper.keyFindings
                    .split(" - ")
                    .slice(1)
                    .map((finding) => <li key={finding}>{finding}</li>)}
                </ul>
              )}
            </div>
          )}
        </div>

        <div className="mt-8 rounded-[1.75rem] border border-base-content/10 bg-base-200 p-6 shadow-sm">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Rating
              </p>
              <h3 className="mt-2 text-2xl font-black">How useful was this paper?</h3>
            </div>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  className={
                    "btn btn-ghost btn-sm text-2xl " +
                    (star <= rating ? "text-warning" : "text-base-content/30")
                  }
                  onClick={() => updateRating(star)}
                  aria-label={`Rate ${star} out of 5`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button className="btn btn-primary flex-1" onClick={() => navigate("/quiz")}>
              Take quiz
            </button>
            <button className="btn btn-outline flex-1" onClick={() => navigate("/community")}>
              Community discussion
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
