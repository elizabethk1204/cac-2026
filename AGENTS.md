# PaperFlow

A social media-style platform for discovering and managing scientific literature

## Vision

Make both aspiring learners and researchers discover and learn more from scientific papers by combining the engagement of social media with the increasing accesibility academic research.

## Problem Statement

- **Low engagement with research**: Traditional literature review processes are time-consuming and daunting
- **Accessibility barrier**: Dense academic papers intimidate newcomers and slow down knowledge acquisition
- **Discovery gaps**: Researchers struggle to find relevant papers outside their immediate domain and even seeing new perspectives or fields
- **Habit formation**: Inconsistent reading habits make staying current with research difficult

## Core Features

### MVP (Phase 1)

- **Intelligent Recommendations**: Algorithm-driven paper suggestions based on:
  - User profile interests and expertise level
  - Interaction history (rating, saves, reading time)
  - Collaborative filtering from similar users
- **Paper Snapshots**: Concise summaries showing:
  - figure or similar visual from the paper for eye catching purpose, takes up half the space of each snapshot
  - Text as follows: Title, authors, publication date
  - Research topic/category as tags/hashtags
  - abstract
  - journal
  - Rating and save options on the right side
- **Search bar**
  - Search by field, date range, citation count

- **Two Save Methods**:
  1. Save to personal library within app, where custom collections can also be made within
  2. Email article link to yourself for later, set up with inital account. Can customize subject title, etc.

### Future Features (Phase 2+)

- **Social Discovery**:
  - View papers liked/saved by followed researchers
  - Follow academic authors
  - See peer activity and trending papers
- **Author Profiles**:
  - Browse all papers by an author
  - Social media-like experience
  - Author verification badges
- **Advanced Filtering**:
  - Custom recommendation algorithms

## Pages

### Onboarding Flow

- Welcome screen explaining app purpose
- User registration (name, email)
- Interest/expertise selection (tags, keywords)
- Tutorial on saving options, settings for how to send the automated emails (being able to choose send time, subject title)

### Main Feed

- Very top includes a weekly streak, weekly goals

- Infinite scroll of paper snapshots
- Each card, styled like an instagram post, shows: title, authors, publication date, journal, summary, topic tags, figure within the paper
- Rating and save buttons below each card
- Click to expand full paper details, or redirect to source depending on settings chosen earlier

### Profile & Settings

- Settings
  - Email notification settings
  - Account management
- Profile
  - Reading history and statistics
  - Interests and expertise preferences
  - Weekly reading streak, weekly goals

### Additional Screens

- Paper detail view (full summary, citations, source link)
- Search results page
- Collections management
- Settings and preferences

## Success Metrics

- **Engagement**: Daily active users, session frequency and duration
- **Learning**: Papers read per user, diversity of topics explored
- **Retention**: Week 1 and month 1 retention rates
- **Habits**: Users with 2+ reading sessions per week
- **Quality**: User ratings of paper summaries and recommendations

## Target Users

1. **Undergraduates, students**: Need accessible entry points to research
2. **Career changers**: Building knowledge in new fields
3. **Active researchers**: Staying current with literature
4. **Science communicators**: Finding engaging papers to share

## Technical Approach

- Frontend: React + Vite (current stack)
- Backend: API for recommendations and user data
- AI/ML: Paper summarization engine, collaborative filtering
- Data: Paper metadata from academic APIs (arXiv, PubMed, CrossRef)
