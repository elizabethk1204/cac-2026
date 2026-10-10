import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router";
import { readLibrary, writeLibrary } from "../libraryStore";

const mockPapers = [
  {
    id: 1,
    title:
      "Loneliness Matters: A Theoretical and Empirical Review of Consequences and Mechanisms",
    authors: "Louise C. Hawkley, John T. Cacioppo",
    date: "7/22/2019",
    topic: "Behavioral Medicine",
    tags: ["#socialspecies", "#loneliness", "#mentalhealth"],
    abstractQuote:
      "The purpose of this paper is to review the features and consequences of loneliness within a comprehensive theoretical framework that informs interventions to reduce loneliness. We review physical and mental health consequences of loneliness, mechanisms for its effects, and effectiveness of extant interventions.",
    image: "Social connection",
    keyFindings: [
      "Loneliness increases vigilance for threat and heightens feelings of vulnerability while raising desire to reconnect.",
      "Implicit hypervigilance for social threat alters psychological processes influencing physiological functioning and diminishing sleep quality.",
      "Loneliness increases morbidity and mortality through altered physiological functioning mechanisms.",
    ],
    journal: "Annals of Behavioral Medicine",
    source: "https://doi.org/10.1007/s12160-010-9210-8",
    readTime: "Review article",
  },
  {
    id: 2,
    title:
      "Neuroinflammatory markers sTREM2 and YKL-40 in association with Alzheimer’s disease pathology: a systematic review and meta-analysis",
    authors:
      "Rachael Yu, Anastasia Suraev, Víctor Vidal, Shawn Dexiao Kong, Robert Zachariae, Laura Piccio, Michael T. Heneka, Sharon L. Naismith, Johannes C. Michaelian",
    date: "7/30/2026",
    topic: "Biology",
    tags: ["#alzheimer's", "#neuroinflammation", "#biomarkers"],
    abstractQuote:
      "Neuroinflammation is increasingly recognised as a key feature of Alzheimer’s Disease (AD) pathophysiology. Markers of glial reactivity, sTREM2 and YKL-40, are elevated in mild cognitive impairment (MCI) and AD, but their associations with core pathology across these stages have not yet been systematically investigated.",
    image: "Neuroinflammation",
    keyFindings: [
      "sTREM2 and YKL-40 are novel markers of glial reactivity elevated in mild cognitive impairment and Alzheimer's disease.",
      "Neuroinflammation is recognized as a key feature of Alzheimer's disease pathophysiology.",
      "The study examined cross-sectional and longitudinal associations between these markers and established AD biomarkers.",
    ],
    journal: "Molecular Psychiatry",
    source: "https://doi.org/10.1038/s41380-026-03787-x",
    readTime: "Systematic review and meta-analysis",
  },
  {
    id: 3,
    title: "Overnight therapy? The role of sleep in emotional brain processing.",
    authors: "Matthew P. Walker, Els van der Helm",
    date: "2009",
    topic: "Neuroscience",
    tags: ["#sleep", "#emotionalregulation"],
    abstractQuote:
      "This review surveys an array of diverse findings across basic and clinical research domains, resulting in a convergent view of sleep-dependent emotional brain processing.",
    image: "Sleep & emotion",
    keyFindings: [
      "The paper is a review surveying findings across basic and clinical research domains on sleep and emotional regulation.",
      "Research builds connections between affective behavior and human brain function within cognitive neuroscience.",
      "The authors outline a model describing sleep-dependent emotional brain processing based on sleep's unique neurobiology.",
    ],
    journal: "Psychological Bulletin",
    source: "https://doi.org/10.1037/a0016570",
    readTime: "Review article",
  },
  {
    id: 4,
    title:
      "Tumor associated depression, gut microbiota, and immune checkpoint inhibitor sensitivity",
    authors: "J Wang",
    date: "2026",
    topic: "Psycho-oncology",
    tags: ["#tumor", "#checkpoint", "#psychoneuroimmunology"],
    abstractQuote:
      "This review specifically distinguishes between major depressive disorder (diagnosed via structured clinical interviews) and subsyndromal depressive symptoms (measured by self-report scales), as their biological correlates may differ.",
    image: "Psychoneuroimmunology",
    keyFindings: [
      "Tumor-associated depression activates the hypothalamic pituitary adrenal axis and upregulates proinflammatory cytokines.",
      "Impaired T cell function and reduced immune checkpoint inhibitor efficacy result from depression's biological effects.",
      "Review distinguishes major depressive disorder from subsyndromal depressive symptoms using different diagnostic and measurement approaches.",
    ],
    journal: "Psycho-Oncologie",
    source: "https://doi.org/10.18282/po5751",
    readTime: "Review article",
  },
  {
    id: 5,
    title:
      "Air Pollution and Mental Health Among African Americans and Caribbean Blacks: Findings from the National Survey of American Life",
    authors:
      "Karen D. Lincoln, Minhazul Mohsin, Jun Wu, Celina Phillipson, Karen Valladares",
    date: "8/4/2026",
    topic: "Sociology",
    tags: ["#mentalhealth", "#airpollution", "#africanamericans"],
    abstractQuote:
      "The findings highlight the need for policy strategies that jointly target environmental exposures and the social factors driving mental health vulnerability in diverse Black populations.",
    image: "Air & mental health",
    keyFindings: [
      "Study examined associations between ambient fine particulate matter (PM2.5) and mental health disorders using logistic regression models.",
      "National Survey of American Life dataset merged with census-tract spatially resolved PM2.5 estimates for 5,178 participants.",
      "Air pollution disproportionately burdens Black communities and may contribute to mental health inequities among African Americans and Caribbean Blacks.",
    ],
    journal: "Sociological Focus",
    source: "https://doi.org/10.1080/00380237.2026.2626862",
    readTime: "Research article",
  },
  {
    id: 6,
    title: "Major Depressive Disorder and Hypothalamic-Pituitary-Adrenal Axis Activity",
    authors:
      "Sophie A. Vreeburg, Witte J.G. Hoogendijk, Johannes van Pelt, Roel H. DeRijk, Jolanda C. M. Verhagen, Richard van Dyck, Johannes H. Smit, Frans G. Zitman, Brenda W.J.H. Penninx",
    date: "2009",
    topic: "Psychology",
    tags: ["#cortisol", "#depression", "#cohortstudy"],
    abstractQuote:
      "There is a central belief that depression is associated with hyperactivity of the hypothalamic-pituitary-adrenal axis, resulting in higher cortisol levels. However, results are inconsistent. Objective: To examine whether there is an association between depression and various cortisol indicators in a large cohort study.",
    image: "Cortisol & mood",
    keyFindings: [
      "Most depression characteristics (severity, chronicity, symptom profile, prior childhood trauma) were not associated with hypothalamic-pituitary-adrenal axis activity except for comorbid anxiety, which tended to be associated with a higher cortisol awakening response.",
      "The use of psychoactive medication was generally associated with lower cortisol levels and less cortisol suppression after dexamethasone ingestion.",
      "Because a higher cortisol awakening response was observed among both subjects with current MDD and subjects with remitted MDD, this may be indicative of an increased biological vulnerability for depression.",
    ],
    journal: "Archives of General Psychiatry",
    source: "https://doi.org/10.1001/archgenpsychiatry.2009.50",
    readTime: "Cohort study",
  },
];

export default function MainFeed({ onNavigate }) {
  const [query, setQuery] = useState("");
  const [activeTopic, setActiveTopic] = useState("For you");
  const [library, setLibrary] = useState(readLibrary);
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
          `${paper.title} ${paper.authors} ${paper.topic} ${paper.journal} ${paper.tags.join(" ")} ${paper.abstractQuote}`.toLowerCase();
        return matchesTopic && searchText.includes(query.toLowerCase());
      }),
    [activeTopic, query],
  );
  const visiblePapers = filteredPapers.slice(0, displayedCount);
  const savedTopicCollections = Object.entries(
    library.savedPapers.reduce((topics, paper) => {
      topics[paper.topic] = (topics[paper.topic] ?? 0) + 1;
      return topics;
    }, {}),
  );

  const setPaperRating = (paperId, rating) => {
    const updatedLibrary = {
      ...library,
      ratings: { ...library.ratings, [paperId]: rating },
    };
    setLibrary(updatedLibrary);
    writeLibrary(updatedLibrary);
  };

  const toggleSaved = (paper) => {
    const exists = library.savedPapers.some((item) => item.id === paper.id);
    const updatedLibrary = {
      ...library,
      savedPapers: exists
        ? library.savedPapers.filter((item) => item.id !== paper.id)
        : [...library.savedPapers, { ...paper, rating: 0 }],
    };
    setLibrary(updatedLibrary);
    writeLibrary(updatedLibrary);
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
        <header className="border-b border-base-300 bg-base-200 px-4 py-5 sm:px-8">
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
                  <Link
                    to="/paper"
                    state={{ paper }}
                    className="mt-2 block text-xl font-black leading-tight hover:text-primary"
                  >
                    {paper.title}
                  </Link>
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
                      {paper.keyFindings.map((finding, index) => (
                          <li key={index}>{finding}</li>
                        ))}
                    </ul>
                  </div>
                  <div className="mt-4 flex items-center justify-between gap-3">
                    <span className="badge badge-secondary badge-outline">
                      {paper.topic}
                    </span>
                    <Link
                      className="font-bold text-primary"
                      to="/paper"
                      state={{ paper }}
                    >
                      Read details <span>→</span>
                    </Link>
                    <a
                      className="font-bold text-primary"
                      href={paper.source}
                      target="_blank"
                      rel="noreferrer"
                    >
                      DOI source ↗
                    </a>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-4 border-t border-base-300 pt-3 md:flex-col md:justify-center md:border-l md:border-t-0 md:pl-3 md:pt-0">
                  <div
                    className="text-center"
                    aria-label={`Rate ${paper.title}`}
                  >
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => {
                        const currentRating =
                          library.ratings[paper.id] || 0;
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
                      {library.ratings[paper.id]
                        ? `${library.ratings[paper.id]} / 5`
                        : "Rate this paper"}
                    </small>
                  </div>
                  <button
                    className={`btn btn-ghost btn-sm h-auto min-h-0 flex-col ${
                      library.savedPapers.some((item) => item.id === paper.id)
                        ? "text-secondary"
                        : "text-base-content/40"
                    }`}
                    onClick={() => toggleSaved(paper)}
                    aria-label={`Save ${paper.title}`}
                  >
                    <span>▱</span>
                    <small>
                      {library.savedPapers.some((item) => item.id === paper.id)
                        ? "Saved"
                        : "Save"}
                    </small>
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
                {savedTopicCollections.length ? (
                  savedTopicCollections.slice(0, 3).map(([topic, count]) => (
                    <button
                      key={topic}
                      className="grid w-full grid-cols-[2rem_1fr_auto] items-center gap-2 border-t border-base-300 py-3 text-left"
                      onClick={() => onNavigate("collections")}
                    >
                      <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary/10 text-primary">
                        ◌
                      </span>
                      <span>
                        <strong className="block text-sm">{topic}</strong>
                        <small className="text-xs text-base-content/50">
                          {count} {count === 1 ? "paper" : "papers"}
                        </small>
                      </span>
                      <b>›</b>
                    </button>
                  ))
                ) : (
                  <p className="border-t border-base-300 py-3 text-sm text-base-content/60">
                    Save a paper to start a topic collection.
                  </p>
                )}
                {library.customCollections.map((collection) => (
                  <button
                    key={collection.id}
                    className="grid w-full grid-cols-[2rem_1fr_auto] items-center gap-2 border-t border-base-300 py-3 text-left"
                    onClick={() => onNavigate("collections")}
                  >
                    <span className="grid h-8 w-8 place-items-center rounded-lg bg-secondary/10 text-secondary">
                      ▱
                    </span>
                    <span>
                      <strong className="block text-sm">{collection.name}</strong>
                      <small className="text-xs text-base-content/50">
                        {collection.paperIds.length}{" "}
                        {collection.paperIds.length === 1 ? "paper" : "papers"}
                      </small>
                    </span>
                    <b>›</b>
                  </button>
                ))}
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
