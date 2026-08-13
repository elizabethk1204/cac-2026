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
  const [currentPage, setCurrentPage] = useState("welcome");

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
        return <MainFeed />;
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

      {/* Navigation for testing different pages */}
      <div
        className="dev-nav"
        style={{
          position: "fixed",
          bottom: "10px",
          right: "10px",
          zIndex: 1000,
          backgroundColor: "#f0f0f0",
          padding: "10px",
          borderRadius: "5px",
          fontSize: "12px",
          maxWidth: "200px",
        }}
      >
        <p style={{ margin: "5px 0", fontWeight: "bold" }}>Dev Navigation</p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5px",
          }}
        >
          <button
            onClick={() => setCurrentPage("welcome")}
            style={{ padding: "5px" }}
          >
            Welcome
          </button>
          <button
            onClick={() => setCurrentPage("register")}
            style={{ padding: "5px" }}
          >
            Register
          </button>
          <button
            onClick={() => setCurrentPage("interests")}
            style={{ padding: "5px" }}
          >
            Interests
          </button>
          <button
            onClick={() => setCurrentPage("tutorial")}
            style={{ padding: "5px" }}
          >
            Tutorial
          </button>
          <button
            onClick={() => setCurrentPage("feed")}
            style={{ padding: "5px" }}
          >
            Feed
          </button>
          <button
            onClick={() => setCurrentPage("paper")}
            style={{ padding: "5px" }}
          >
            Paper
          </button>
          <button
            onClick={() => setCurrentPage("profile")}
            style={{ padding: "5px" }}
          >
            Profile
          </button>
          <button
            onClick={() => setCurrentPage("search")}
            style={{ padding: "5px" }}
          >
            Search
          </button>
          <button
            onClick={() => setCurrentPage("collections")}
            style={{ padding: "5px" }}
          >
            Collections
          </button>
          <button
            onClick={() => setCurrentPage("settings")}
            style={{ padding: "5px" }}
          >
            Settings
          </button>
        </div>
      </div>
    </div>
  );
}
