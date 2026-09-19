import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router";

const mockPapers = [
  {
    id: 1,
    title: "Deep Learning for Natural Language Processing",
    authors: "Smith, J., Johnson, M., Williams, R.",
    date: "2024-06-15",
    topic: "Computer Science",
    tags: ["#machinelearning", "#NLP", "#transformers"],
    abstractQuote:
      '"Transformer architectures have become the dominant approach for a wide range of natural language processing tasks, enabling substantial gains through scalable attention mechanisms and transfer learning."',
    image: "AI",
    keyFindings:
      "- Transformer models outperform traditional RNN-based approaches - Transfer learning significantly reduces training time - Multi-task training improves generalization - Model size correlates strongly with performance gains",
    journal: "Nature Machine Intelligence",
    readTime: "12 min read",
    saved: false,
  },
  {
    id: 2,
    title: "Quantum Computing: Opportunities and Challenges",
    authors: "Brown, A., Davis, K., Chen, L.",
    date: "2024-05-20",
    topic: "Physics",
    tags: ["#quantumcomputing", "#cryptography", "#optimization"],
    abstractQuote:
      '"We review the current state of quantum computing, focusing on the opportunities and practical challenges that arise as quantum systems move toward useful applications."',
    image: "QC",
    keyFindings:
      "- Quantum algorithms can provide exponential speedups for certain problems - Error correction remains a major hurdle for scalable quantum computing - Hybrid quantum-classical approaches are promising for near-term applications - Quantum computing has implications for cryptography and security",
    journal: "Quantum Information",
    readTime: "8 min read",
    saved: false,
  },
  {
    id: 3,
    title: "CRISPR Gene Editing: Advances and Ethical Considerations",
    authors: "Martinez, S., Lee, H., Patel, R.",
    date: "2024-07-10",
    topic: "Biology",
    tags: ["#CRISPR", "#geneediting", "#bioethics"],
    abstractQuote:
      '"Recent advances in CRISPR-based technologies have expanded the precision and range of genome editing, while also raising important questions about responsible clinical translation."',
    image: "BIO",
    keyFindings:
      "- CRISPR-Cas systems enable precise genome editing in a wide range of organisms - Off-target effects remain a concern for therapeutic applications - Ethical considerations include germline editing and equitable access to technology - Regulatory frameworks are evolving to address the unique challenges of gene editing",
    journal: "Nature Biotechnology",
    readTime: "10 min read",
    saved: false,
  },
  {
    id: 4,
    title: "The Social Life of Urban Trees",
    authors: "Nguyen, P., Carter, E., Okafor, N.",
    date: "2024-07-22",
    topic: "Environmental Science",
    tags: ["#urbanecology", "#climate", "#biodiversity"],
    abstractQuote:
      '"Urban trees provide interconnected ecological and social benefits, but their distribution and resilience depend on how cities plan for long-term environmental change."',
    image: "ECO",
    keyFindings:
      "- Urban trees improve air quality, reduce heat islands, and support biodiversity - Social benefits include mental health improvements and community cohesion - Tree distribution is often inequitable, with marginalized communities having less access - Climate change poses challenges for urban tree survival and management",
    journal: "Global Environmental Change",
    readTime: "9 min read",
    saved: false,
  },
  {
    id: 5,
    title: "Memory Consolidation During Sleep",
    authors: "Harris, L., Patel, R., Moretti, G.",
    date: "2024-08-02",
    topic: "Neuroscience",
    tags: ["#memory", "#sleep", "#cognition"],
    abstractQuote:
      '"Our findings suggest that targeted neural replay during sleep supports the selective consolidation of new memories and may improve later recall."',
    image: "NEU",
    keyFindings:
      "- Sleep-dependent memory consolidation enhances long-term retention - Targeted neural replay during sleep facilitates the integration of new information - Cognitive performance is improved with adequate sleep duration - Sleep disruption impairs memory formation and learning",
    journal: "Nature Neuroscience",
    readTime: "11 min read",
    saved: false,
  },
  {
    id: 6,
    title: "A New Perspective on Scientific Discovery",
    authors: "Wilson, T., Adeyemi, K., Rossi, M.",
    date: "2024-08-11",
    topic: "Computer Science",
    tags: ["#scienceofscience", "#discovery", "#research"],
    abstractQuote:
      '"Combining large-scale scholarly data with expert judgment reveals overlooked connections that can guide more diverse and productive research agendas."',
    image: "SCI",
    keyFindings:
      "- Data-driven approaches can identify underexplored research areas - Interdisciplinary collaboration enhances the potential for novel discoveries - Expert judgment remains critical for interpreting complex scientific landscapes - Open access to data and publications accelerates the pace of discovery",
    journal: "Science Advances",
    readTime: "7 min read",
    saved: false,
  },
];

export default function MainFeed({ onNavigate }) {
  const [query, setQuery] = useState("");
  const [activeTopic, setActiveTopic] = useState("For you");
  const [ratings, setRatings] = useState({});
  const [saved, setSaved] = useState([]);
  const [displayedCount, setDisplayedCount] = useState(3);

  useEffect(() => {
    const loadMore = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 240
      ) {
        setDisplayedCount((count) => Math.min(count + 3, mockPapers.length));
      }
    };
    window.addEventListener("scroll", loadMore);
    return () => window.removeEventListener("scroll", loadMore);
  }, []);

  const filteredPapers = useMemo(
    () =>
      mockPapers.filter((paper) => {
        const matchesTopic =
          activeTopic === "For you" || paper.topic === activeTopic;
        const searchText =
          `${paper.title} ${paper.authors} ${paper.topic}`.toLowerCase();
        return matchesTopic && searchText.includes(query.toLowerCase());
      }),
    [activeTopic, query],
  );
  const visiblePapers = filteredPapers.slice(0, displayedCount);

  const toggleItem = (setItems, id) => {
    setItems((items) =>
      items.includes(id) ? items.filter((item) => item !== id) : [...items, id],
    );
  };

  const setPaperRating = (paperId, rating) => {
    setRatings((currentRatings) => ({ ...currentRatings, [paperId]: rating }));
  };

  return (
    <div className="min-h-screen bg-base-200">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-60 border-r border-base-300 bg-base-100 p-6 lg:flex lg:flex-col">
        <div className="text-2xl font-black tracking-tight">
          <span className="text-primary">↗</span> paperflow
        </div>
        <p className="mt-1 text-xs font-bold uppercase tracking-widest text-base-content/50">
          Your research desk
        </p>
        <nav className="mt-10 grid gap-2" aria-label="Primary navigation">
          <button
            className="btn btn-secondary justify-start"
            onClick={() => onNavigate("feed")}
          >
            <span>◈</span> Discover
          </button>
          <button
            className="btn btn-ghost justify-start"
            onClick={() => onNavigate("collections")}
          >
            <span>▱</span> Library
          </button>
          <button
            className="btn btn-ghost justify-start"
            onClick={() => onNavigate("search")}
          >
            <span>⌕</span> Search
          </button>
        </nav>
        <div className="mt-auto grid gap-4">
          <button
            className="flex items-center gap-2 text-left"
            onClick={() => onNavigate("profile")}
          >
            <span className="avatar placeholder">
              <span className="w-9 rounded-full bg-primary text-primary-content">
                EK
              </span>
            </span>
            <span className="grid min-w-0">
              <strong>Elizabeth Kim</strong>
              <small>Personal workspace</small>
            </span>
            <b>•••</b>
          </button>
          <button
            className="btn btn-ghost justify-start"
            onClick={() => onNavigate("settings")}
          >
            ⚙ Settings
          </button>
        </div>
      </aside>

      <main className="min-h-screen lg:ml-60">
        <header className="sticky top-0 z-5 border-b border-base-300 bg-base-200/90 px-4 py-5 backdrop-blur sm:px-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary">
                Wednesday, August 26
              </p>
              <h1 className="mt-1 text-2xl font-black tracking-tight sm:text-4xl">
                Good morning, Elizabeth
              </h1>
            </div>
            <button
              className="btn btn-circle btn-ghost"
              aria-label="Notifications"
            >
              ♧<i />
            </button>
          </div>
          <div className="relative mt-4 max-w-4xl">
            <span>⌕</span>
            <input
              className="input input-bordered w-full rounded-full pl-10"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              type="search"
              placeholder="Search papers, authors, topics..."
            />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3 rounded-2xl border border-base-300 bg-base-100 p-3 sm:grid-cols-3">
            <div>
              <span className="text-xl text-primary">✦</span>
              <span>
                <small className="block text-xs text-base-content/50">
                  Reading streak
                </small>
                <strong className="block">4 days</strong>
              </span>
            </div>
            <div>
              <span className="text-xl text-secondary">◷</span>
              <span>
                <small className="block text-xs text-base-content/50">
                  Weekly goal
                </small>
                <strong className="block">3 of 5 papers</strong>
              </span>
            </div>
            <div className="col-span-2 self-center sm:col-span-1">
              <progress
                className="progress progress-primary w-full"
                value="60"
                max="100"
              />
            </div>
          </div>
          <div
            className="tabs tabs-boxed mt-4 w-fit bg-base-100"
            role="tablist"
          >
            {["For you", "Computer Science", "Biology", "Physics"].map(
              (topic) => (
                <button
                  key={topic}
                  className={activeTopic === topic ? "tab tab-active" : "tab"}
                  onClick={() => setActiveTopic(topic)}
                >
                  {topic}
                </button>
              ),
            )}
          </div>
        </header>

        <div className="mx-auto grid max-w-7xl gap-6 p-4 sm:p-8 xl:grid-cols-[minmax(0,1fr)_18rem]">
          <section className="min-w-0">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-primary">
                  Curated for your interests
                </p>
                <h2 className="mt-1 text-2xl font-black">
                  Today&apos;s reading list
                </h2>
              </div>
              <button className="font-bold text-primary">
                Latest <span>⌄</span>
              </button>
            </div>
            {visiblePapers.map((paper, index) => (
              <article
                key={paper.id}
                className="mb-4 grid gap-4 rounded-2xl border border-base-300 bg-base-100 p-4 shadow-lg md:grid-cols-[30%_minmax(0,1fr)_5rem]"
              >
                <div
                  className={`relative grid min-h-48 place-items-center overflow-hidden rounded-xl bg-gradient-to-br ${index === 1 ? "from-warning/30 to-secondary/30" : index === 2 ? "from-info/30 to-primary/30" : "from-secondary/30 to-primary/30"} text-5xl`}
                  aria-label={`Visual for ${paper.title}`}
                >
                  <span>{paper.image}</span>
                  <div className="absolute inset-x-0 top-1/3 h-12 -rotate-6 border-y-2 border-base-content/20" />
                  <div className="absolute bottom-3 right-3 text-[0.55rem] font-bold tracking-widest text-base-content/60">
                    FIGURE / VISUAL SUMMARY
                  </div>
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-base-content/60">
                    <span>
                      {paper.date} · {paper.readTime}
                    </span>
                  </div>
                  <h2 className="mt-2 text-xl font-black leading-tight">
                    {paper.title}
                  </h2>
                  <p className="mt-1 text-sm text-base-content/60">
                    {paper.authors}
                  </p>
                  <p className="text-sm text-base-content/60">
                    {paper.journal}
                  </p>
                  <div className="my-3 flex flex-wrap gap-2">
                    {paper.tags.map((tag) => (
                      <Link
                        key={tag}
                        to={`/search?q=${encodeURIComponent(tag)}`}
                        className="badge badge-outline badge-secondary transition hover:bg-secondary hover:text-secondary-content"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                  <div className="mt-4 border-l-2 border-primary pl-3">
                    <p className="text-xs font-bold uppercase tracking-widest text-primary">
                      From the abstract
                    </p>
                    <blockquote className="mt-1 text-sm leading-6 text-base-content/70">
                      {paper.abstractQuote}
                    </blockquote>
                  </div>
                  <div className="mt-4 border-l-2 border-secondary pl-3">
                    <p className="text-xs font-bold uppercase tracking-widest text-secondary">
                      Key Findings:
                    </p>
                    <ul className="mt-1 grid gap-1 pl-4 text-sm text-base-content/70">
                      {paper.keyFindings
                        .split(" - ")
                        .slice(1)
                        .map((finding, index) => (
                          <li key={index}>{finding}</li>
                        ))}{" "}
                    </ul>
                  </div>
                  <div className="mt-4 flex items-center justify-between gap-3">
                    <span className="badge badge-secondary badge-outline">
                      {paper.topic}
                    </span>
                    <button
                      className="font-bold text-primary"
                      onClick={() => onNavigate("paper")}
                    >
                      Read paper <span>↗</span>
                    </button>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-4 border-t border-base-300 pt-3 md:flex-col md:justify-center md:border-l md:border-t-0 md:pl-3 md:pt-0">
                  <div
                    className="text-center"
                    aria-label={`Rate ${paper.title}`}
                  >
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => {
                        const currentRating = ratings[paper.id] || 0;
                        return (
                          <button
                            key={star}
                            className={`border-0 bg-transparent px-0.5 ${
                              star <= currentRating
                                ? "text-primary"
                                : "text-base-300"
                            }`}
                            onClick={() => setPaperRating(paper.id, star)}
                            aria-label={`${star} out of 5 stars`}
                          >
                            ★
                          </button>
                        );
                      })}
                    </div>
                    <small className="block text-xs text-base-content/60">
                      {ratings[paper.id]
                        ? `${ratings[paper.id]} / 5`
                        : "Rate this paper"}
                    </small>
                  </div>
                  <button
                    className={`btn btn-ghost btn-sm h-auto min-h-0 flex-col ${
                      saved.includes(paper.id)
                        ? "text-secondary"
                        : "text-base-content/40"
                    }`}
                    onClick={() => toggleItem(setSaved, paper.id)}
                    aria-label={`Save ${paper.title}`}
                  >
                    <span>▱</span>
                    <small>{saved.includes(paper.id) ? "Saved" : "Save"}</small>
                  </button>
                </div>
              </article>
            ))}
            {!visiblePapers.length && (
              <div className="alert alert-info">
                <strong>No papers found</strong>
                <p>Try another topic or search term.</p>
              </div>
            )}
            {visiblePapers.length < filteredPapers.length && (
              <p className="py-8 text-center text-sm text-base-content/60">
                Loading more papers...
              </p>
            )}
          </section>
          <aside className="grid content-start gap-4">
            <div className="card border border-base-300 bg-base-100 shadow-lg">
              <div className="card-body p-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="flame">✦</span>
                  <span>Reading streak</span>
                  <b>4 days</b>
                </div>
                <p className="text-sm text-base-content/60">
                  Keep your momentum going.
                </p>
                <div className="flex justify-between text-xs font-bold text-primary">
                  <span className="done">M</span>
                  <span className="done">T</span>
                  <span className="done">W</span>
                  <span className="today">T</span>
                  <span>F</span>
                  <span>S</span>
                  <span>S</span>
                </div>
              </div>
            </div>
            <div className="card border border-base-300 bg-base-100 shadow-lg">
              <div className="card-body p-4">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-bold">Your collections</h3>
                  <button
                    className="text-sm font-bold text-primary"
                    onClick={() => onNavigate("collections")}
                  >
                    View all
                  </button>
                </div>
                <button className="grid w-full grid-cols-[2rem_1fr_auto] items-center gap-2 py-3 text-left">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary/10 text-primary">
                    ◌
                  </span>
                  <span>
                    <strong className="block text-sm">
                      AI & Machine Learning
                    </strong>
                    <small className="text-xs text-base-content/50">
                      15 papers
                    </small>
                  </span>
                  <b>›</b>
                </button>
                <button className="grid w-full grid-cols-[2rem_1fr_auto] items-center gap-2 border-t border-base-300 py-3 text-left">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-secondary/10 text-secondary">
                    ⌁
                  </span>
                  <span>
                    <strong className="block text-sm">Neuroscience</strong>
                    <small className="text-xs text-base-content/50">
                      8 papers
                    </small>
                  </span>
                  <b>›</b>
                </button>
                <button className="grid w-full grid-cols-[2rem_1fr_auto] items-center gap-2 border-t border-base-300 py-3 text-left">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-warning/20 text-warning-content">
                    ✧
                  </span>
                  <span>
                    <strong className="block text-sm">To read this week</strong>
                    <small className="text-xs text-base-content/50">
                      6 papers
                    </small>
                  </span>
                  <b>›</b>
                </button>
              </div>
            </div>
            <div className="card border border-base-300 bg-base-100 shadow-lg">
              <div className="card-body p-4">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-bold">Weekly goal</h3>
                  <span>3 / 5 papers</span>
                </div>
                <progress
                  className="progress progress-primary w-full"
                  value="60"
                  max="100"
                />
                <p className="text-sm text-base-content/60">
                  Two more papers to reach your goal.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
