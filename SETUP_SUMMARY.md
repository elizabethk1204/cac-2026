# PaperFlow Frontend Mock-up - Complete Setup

## ✅ What's Been Created

### 10 Mock-up Pages

All pages are fully styled and interactive (UI only, no backend logic):

1. **Welcome.jsx** - Landing page with feature highlights
2. **Register.jsx** - User registration form
3. **InterestSelection.jsx** - Research interests & expertise level selection
4. **Tutorial.jsx** - "How to Use" guide with email settings
5. **MainFeed.jsx** - Infinite scroll paper feed with like/save/read actions
6. **PaperDetail.jsx** - Full paper view with stats, citations, related papers
7. **Profile.jsx** - User profile with saved papers, collections, reading history
8. **SearchResults.jsx** - Search functionality with filters and pagination
9. **Collections.jsx** - Manage and organize paper collections
10. **Settings.jsx** - Account settings, notifications, privacy, data management

### Navigation System

- **Current**: State-based navigation in App.jsx with dev navigation panel (bottom-right)
- **For Production**: React Router config file provided in `router.config.jsx`
- **All pages link properly** and have working UI elements

### Styling

- **Comprehensive CSS** in `index.css` with 900+ lines
- **Responsive design** (mobile, tablet, desktop)
- **CSS variables** for easy theme customization
- **Hover effects, transitions, and visual feedback**
- **Clean, modern design** with blue/gray color scheme

## 🚀 How to Use

### View Different Pages

Click any button in the **Dev Navigation** panel (bottom-right corner):

- Navigate between all 10 pages instantly
- See how each page looks and feels

### Test the App

```bash
npm run dev
# Opens at http://localhost:5174
```

## 📦 Next Steps

### 1. Install React Router (when network available)

```bash
npm install react-router-dom
```

Then update App.jsx using the template in `router.config.jsx` for proper routing.

### 2. Add Backend Integration

- Create API endpoints for:
  - Paper recommendations
  - Search functionality
  - User management
  - Collections management

### 3. Implement State Management

- Use Context API or Redux for:
  - User authentication
  - Saved papers
  - User preferences
  - Feed data

### 4. Connect Real Data Sources

- Integrate paper APIs:
  - arXiv API
  - PubMed API
  - CrossRef API
- Implement AI summarization

### 5. Add Real Functionality

- User authentication & registration
- Paper recommendations algorithm
- Search filtering
- Email notifications
- Collection management

## 📁 Project Structure

```
src/
├── App.jsx              # Main app with state-based routing
├── router.config.jsx    # React Router setup (ready to use)
├── index.css            # All styling
├── pages/               # All page components
│   ├── Welcome.jsx
│   ├── Register.jsx
│   ├── InterestSelection.jsx
│   ├── Tutorial.jsx
│   ├── MainFeed.jsx
│   ├── PaperDetail.jsx
│   ├── Profile.jsx
│   ├── SearchResults.jsx
│   ├── Collections.jsx
│   └── Settings.jsx
├── main.jsx
└── assets/
```

## 🎨 Design Features

- Clean, modern interface inspired by social media
- Emoji-based visual indicators for quick scanning
- Card-based layout for paper information
- Responsive grid layouts
- Smooth transitions and hover effects
- Accessibility-friendly HTML structure

## 💡 Notes

- All pages are **mock-ups only** (no real data or backend)
- Buttons and forms are functional UI elements
- Dev nav panel removes itself once you implement React Router
- CSS is production-ready and easily customizable
- Code is well-organized and commented where needed

Enjoy exploring PaperFlow! 🚀

## Notes - 9/19

- Welcome Page - Creating account, saving user/password - dictionary?
- Research Interests
  - More topics, ability to be more specific (write your own?)
  - Rewritten expertise level: How does expertise level affect the feed? Maybe get rid of
- Feed \*\* video
  - Starts with "good morning \_", followed by streak
  - Figure/highly related illustration from paper
  - Save button changed to add to collection button
  - Include: Date shown more prominently
  - Search
    - Search filters for date, authors, journal, topic
    - Should lead to filtered view of main feed with parameters of the search
  - Paper
    - Discuss: get rid of as extra friciotn? display information from here onto main
    - Abstract, key findings, topics, read full paper, save to library
    - read full paper -> linked
    - Related paper
      - Suggest in feed as well as under "paper"
- Profile \*\* video
  - Smaller statistics under name: papers read, collections saved, reading time
  - Change interests, experiences
  - Highlight weekly streak, gameified reading
  - Reading streak
    - PB, current progress
    - day counted with first external link clicked of the day
  - Weekly Goal
    - Set quantity of papers
      - Only tracked when click onto external link
  - Settings
    - Change email, name
    - Get rid of bio
- Collections \*\* video
  - Make new collection
    - Name collection, description, view papers (new page), edit, delete
    - View: Same as "paper", removed citations, rating, read time, abstract, key findings, topics, related papers
    - View: Title, Authors, Journal, Date, Citation
