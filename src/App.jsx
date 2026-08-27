import { useState } from "react";
import Welcome from "./pages/Welcome";
import Register from "./pages/Register";
import InterestSelection from "./pages/InterestSelection";
import Tutorial from "./pages/Tutorial";
import MainFeed from "./pages/MainFeed";
import PaperDetail from "./pages/PaperDetail";
import Profile from "./pages/Profile";
import SearchResults from "./pages/SearchResults";
import Collections from "./pages/Collections";
import Settings from "./pages/Settings";

export default function App() {
  // TODO: Replace this with React Router once installed
  // For now using state-based navigation for mock-up
  const [currentPage, setCurrentPage] = useState("feed");

  const renderPage = () => {
    switch (currentPage) {
      case "welcome":
        return <Welcome />;
      case "register":
        return <Register />;
      case "interests":
        return <InterestSelection />;
      case "tutorial":
        return <Tutorial />;
      case "feed":
        return <MainFeed onNavigate={setCurrentPage} />;
      case "paper":
        return <PaperDetail />;
      case "profile":
        return <Profile />;
      case "search":
        return <SearchResults />;
      case "collections":
        return <Collections />;
      case "settings":
        return <Settings />;
      default:
        return <Welcome />;
    }
  };

  return (
    <div className="app">
      {renderPage()}
      <div className="dev-nav">
        <p>Developer navigation</p>
        <div className="dev-nav-grid">
          {[
            ["welcome", "Welcome"],
            ["register", "Register"],
            ["interests", "Interests"],
            ["tutorial", "Tutorial"],
            ["feed", "Feed"],
            ["paper", "Paper"],
            ["profile", "Profile"],
            ["search", "Search"],
            ["collections", "Collections"],
            ["settings", "Settings"],
          ].map(([page, label]) => (
            <button
              key={page}
              className={currentPage === page ? "active" : ""}
              onClick={() => setCurrentPage(page)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
