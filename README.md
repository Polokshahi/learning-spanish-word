# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


-Project Introduction and Key Features
This project is a fun and interactive language-learning application designed to help users expand their vocabulary and improve communication skills. It addresses the challenge of retaining vocabulary by offering an engaging interface and user-friendly features. The app supports learning for a specific language (other than Bengali and English) while maintaining English as the primary language for the interface, ensuring accessibility for all users.

- This Website is a Learning Spanish Vucavulary.


Key Features
1. User Authentication (via Firebase)
Secure login system for accessing vocabulary lessons.
Supports:
Email/password login and registration.
Google social login for seamless authentication.
Password reset functionality


2. Vocabulary Lessons
Each lesson provides comprehensive details for vocabulary words, including:
Word: In the target language.
Pronunciation: In English.
Meaning: In English.
Part of Speech: (e.g., noun, verb).
Difficulty Level: Easy, Medium, Hard.
Lesson Number: Categorized from 1–10.
Usage Context: Explains when to use the word.
Examples: Includes sentence examples with pronunciation guides.


3. Interactive User Interface
Color-coded vocabulary cards: Visual difficulty-based cues (e.g., green for easy, red for hard).
Dynamic modals: Provide detailed information like "when to say" and example usage.
4. Private Routes
Secures sensitive routes such as:
/lesson/:lesson_no
/my-profile
/tutorials
Ensures logged-in users remain authenticated even on route reloads.


5. Fully Responsive Design
Optimized for mobile, tablet, and desktop devices.
Provides a seamless and consistent user experience across all platforms.
6. JSON-Based Vocabulary Database
Includes 50–200 vocabulary entries in the selected target language.
Each entry is structured with key attributes for effective learning.
Supports various languages like Spanish, French, Mandarin, Japanese, and more.
7. Tutorials Section
Embeds engaging YouTube videos for learning alphabets and basic language structures.
Features a "Learn Vocabularies" button to redirect users to the lessons page.


8. Profile Management
Displays user profile information such as name, email, and profile photo.
Update feature: Allows users to edit their name and photo directly through Firebase.
9. Speaking Feature
Users can click on a vocabulary card to hear the word's pronunciation.
Implements Web Speech API or equivalent tools.
10. Home Page
Includes the following sections:
Banner/Slider: Features captivating language-learning visuals.
About Section: Explains the app's mission and purpose.
Success Section: Animated counters for user stats like vocabulary count, lessons, etc.
Two additional user-engaging sections for enhanced interaction.
11. Error Handling
Custom 404 error page for invalid routes.
Includes a button to redirect users back to the home page.
Additional Functionalities
1. Enhanced Authentication
Implements password validation with the following criteria:
At least one uppercase letter.
At least one lowercase letter.
Minimum length of six characters.
2. Deployment and Hosting

Compatible with Netlify, Surge, and Firebase Hosting.
Ensures proper routing to avoid errors on page reloads.
3. Animation Support
Integrates animations using libraries like AOS or Animate.css for an engaging user experience.

4. Extra Features
Embedded multilingual YouTube videos for additional learning resources.
"Speak up your Vocabularies" functionality for auditory learning.
Project Workflow Tips

1. GitHub Commits
Maintain at least 10 meaningful commits with descriptive messages to document project progress.


2. README File
Include:
Project name and purpose.
Live URL for quick access.
Key features and functionalities.
List of npm packages used.


3. Environment Variables
Secure Firebase configuration keys by storing them in a .env file.
This project combines an intuitive UI/UX design, robust Firebase integration, and innovative features to create a seamless and engaging experience for language learners. By addressing common challenges in vocabulary retention, it empowers users to enhance their skills effectively.
