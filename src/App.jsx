import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router";
import Welcome from "./pages/Welcome";
import Register from "./pages/Register";
import InterestSelection from "./pages/InterestSelection";
import Tutorial from "./pages/Tutorial";
import MainFeed from "./pages/MainFeed";
import Profile from "./pages/Profile";
import SearchResults from "./pages/SearchResults";
import Collections from "./pages/Collections";
import Settings from "./pages/Settings";
import { pagePaths } from "./router.config";

function AppRoutes() {
  const navigate = useNavigate();
  const onNavigate = (page) => navigate(pagePaths[page] ?? page);

  return (
    <Routes>
      <Route
        path={pagePaths.welcome}
        element={<Welcome onNavigate={onNavigate} />}
      />
      <Route
        path={pagePaths.register}
        element={<Register onNavigate={onNavigate} />}
      />
      <Route
        path={pagePaths.interests}
        element={<InterestSelection onNavigate={onNavigate} />}
      />
      <Route
        path={pagePaths.tutorial}
        element={<Tutorial onNavigate={onNavigate} />}
      />
      <Route
        path={pagePaths.feed}
        element={<MainFeed onNavigate={onNavigate} />}
      />
      <Route path={pagePaths.profile} element={<Profile />} />
      <Route path={pagePaths.search} element={<SearchResults />} />
      <Route path={pagePaths.collections} element={<Collections />} />
      <Route path={pagePaths.settings} element={<Settings />} />
      <Route path="*" element={<Navigate to={pagePaths.welcome} replace />} />
    </Routes>
  );
}

function DeveloperNavigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const pages = [
    ["welcome", "Welcome"],
    ["register", "Register"],
    ["interests", "Interests"],
    ["tutorial", "Tutorial"],
    ["feed", "Feed"],
    ["profile", "Profile"],
    ["search", "Search"],
    ["collections", "Collections"],
    ["settings", "Settings"],
  ];

  return (
    <div className="fixed bottom-4 right-4 z-50 w-48 rounded-2xl border border-base-300 bg-base-100/95 p-3 text-xs shadow-xl backdrop-blur">
      <p className="mb-2 font-bold uppercase tracking-wider text-base-content/60">
        Developer navigation
      </p>
      <div className="grid grid-cols-2 gap-1">
        {pages.map(([page, label]) => (
          <button
            key={page}
            className={`btn btn-xs ${location.pathname === pagePaths[page] ? "btn-secondary" : "btn-ghost"}`}
            onClick={() => navigate(pagePaths[page])}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <AppRoutes />
        <DeveloperNavigation />
      </div>
    </BrowserRouter>
  );
}
