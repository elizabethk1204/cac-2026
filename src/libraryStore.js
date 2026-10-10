const STORAGE_KEY = "paperflow-library";

const emptyLibrary = {
  savedPapers: [],
  customCollections: [],
  ratings: {},
};

export function readLibrary() {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (!stored) return emptyLibrary;

  const library = JSON.parse(stored);
  if (
    !library ||
    !Array.isArray(library.savedPapers) ||
    !Array.isArray(library.customCollections) ||
    typeof library.ratings !== "object" ||
    library.ratings === null
  ) {
    throw new Error("Saved library data has an invalid format.");
  }

  return library;
}

export function writeLibrary(library) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(library));
}
