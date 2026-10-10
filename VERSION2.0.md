Goal for 2.0
Goal of app: Increase accessibility and encourage learning with scientific literature through different lexile levels, quiz/check for understanding features, community interaction, and badges

Use DaisyUI for all, no extra css/aesthetic detailing

- Main feed: Snapshot of article, click to read
  - Essentially very similar to current MainFeed.jsx page
    Date, authors, journal, hashtags (subtopics), topic
    Source
    PubMed - bio/health sciences
    Semantic Scholar - general STEM
    OpenAlex - more humanities
    Google Scholar - search engine
    Visual = figure from paper, related image
    One sentence from abstract
    3 key findings in bullet points - AI?
- Expanded Paper (goes here when clicking on the article snapshot in the main feed)
  - Choose lexile level, options at the top, can easily switch any time
  - Lexile level - MAX is original article
  - Entire article outlined out, rewritten in lexile level mentioned above
  - After end of article:
  - Rating feature stars 0 - 5
  - Button to take quiz for comphrension
- Quiz (Check for Understanding) - taken here when clicked on button from expanded paper page
  - 5 multiple choice questions, 2 very short answer questions to check for comphrension of the paper and its relevance
  - Must get 75%+ to pass and unlock community feature
- Community Page
  - After achieveing 75%+ on the quiz, instead of the take quiz button there is a community discussion feature that opens up
  - Stylized like reddit comment sections on a post, users can dicuss and commentate on the article
- Collections: Save papers from feed to articles
  Automatically save by topic like how apple automatically names app folders
  Ability to create custom collections - your own title
  New view of papers inside collections - can click to expand to expanded paper view
  Title
  What you rated
  Journal, date, authors (in one line)
- Achievement Log
  Badges for quiz accuracy
  Badges for lexile level reached
  Badges for community interaction metrics
  Displayed on Profile
- Profile Page
  Badges displayed, user join date
- Other pages:
  - Tutorial
  - Settings
  - Welcome page with interest selection + grade level
