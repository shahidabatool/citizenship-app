# 🍁🇬🇧 Citizenship Test Prep App

A modern, interactive web application designed to help users prepare for **Canadian** and **UK Citizenship Tests**. Built with Next.js, React, and TypeScript, this app provides a comprehensive study platform with multiple learning modes and an elegant user interface.

---

## 🌐 Live Demo

**[🚀 Try the App Now - Completely Free!](https://citizenship-izujjfjoy-shahidas-projects-4151b7d2.vercel.app/)**

Experience the full application live on Vercel! **No installation, no sign-up, no cost** - just start practicing for your Canadian or UK citizenship test immediately. Perfect for anyone preparing for their citizenship exam!

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://citizenship-izujjfjoy-shahidas-projects-4151b7d2.vercel.app/)

---

## ✨ Features

### 🎯 Dual Country Support
- **Canada**: Prepare for the Canadian Citizenship Test with 100+ authentic practice questions
- **United Kingdom**: Study for the Life in the UK Test with 100+ comprehensive questions

### 📚 Multiple Study Modes

1. **Mock Test**
   - Full-length practice exams simulating the real test experience
   - Canada: 20 randomly selected questions
   - UK: 24 randomly selected questions
   - Instant feedback with detailed explanations
   - Score tracking and performance review

2. **Sample Test**
   - Quick practice sessions with a subset of questions
   - Perfect for short study sessions
   - Immediate answer validation

3. **Study by Topic**
   - Organized learning by subject categories
   - Topics include:
     - **Canada**: Rights & Responsibilities, History, Government, Geography, Symbols, Economy, Justice
     - **UK**: Values & Principles, History, Government & Law, Culture, Geography
   - Focused practice on specific areas

4. **Official Study Guides**
   - Access to official government study materials
   - **Canada**: "Discover Canada" PDF guide
   - **UK**: PDF guideline (copyright-compliant version)
   - Built-in PDF viewer with download option

### 🎨 Premium User Experience

- **Modern Design**: Clean, professional interface with smooth animations
- **Dark/Light Mode**: Toggle between themes for comfortable studying any time
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Glassmorphism Effects**: Beautiful translucent UI elements
- **Interactive Feedback**: Instant visual feedback on answers
- **Progress Tracking**: Monitor your performance throughout practice sessions

### 🧠 Smart Question System

- **100+ Questions per Country**: Comprehensive coverage of test material
- **Random Selection**: Questions randomized for varied practice
- **Detailed Explanations**: Learn from every answer with thorough explanations
- **Topic-Based Organization**: Questions categorized by subject matter
- **Authentic Content**: Based on official government study materials

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd citizenship-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 16.0.3](https://nextjs.org/) - React framework with server-side rendering
- **UI Library**: [React 19.2.0](https://react.dev/) - Modern component-based UI
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling**: CSS Modules with custom design system
- **Fonts**: [Google Fonts (Outfit)](https://fonts.google.com/) - Modern, clean typography
- **State Management**: React Context API for theme management

---

## 📁 Project Structure

```
citizenship-app/
├── app/                          # Next.js app directory
│   ├── [country]/               # Dynamic country routes
│   │   ├── booklet/            # Study guide pages
│   │   ├── mock/               # Mock test pages
│   │   ├── sample/             # Sample test pages
│   │   └── topic/              # Topic-based study pages
│   ├── layout.tsx              # Root layout with theme support
│   ├── page.tsx                # Landing page
│   └── globals.css             # Global styles and design system
├── components/                  # Reusable React components
│   ├── Quiz.tsx                # Quiz component
│   ├── QuizInterface.tsx       # Main quiz interface
│   └── ThemeToggle.tsx         # Dark/light mode toggle
├── contexts/                    # React contexts
│   └── ThemeContext.tsx        # Theme management
├── data/                        # Application data
│   └── questions.ts            # Question database
├── public/                      # Static assets
│   ├── pdfs/                   # Study guide PDFs
│   └── *.jpg, *.png            # Images and flags
└── package.json                # Project dependencies
```

---

## 🎓 How to Use

### 1. Choose Your Country
Select either **Canada** 🍁 or **United Kingdom** 🇬🇧 from the landing page.

### 2. Select a Study Mode
- **Mock Test**: Take a full practice exam
- **Sample Test**: Quick practice session
- **Study by Topic**: Focus on specific subjects
- **Study Guide**: Read official materials

### 3. Practice and Learn
- Answer questions at your own pace
- Review explanations for each answer
- Track your progress and scores
- Identify areas that need more study

### 4. Prepare for Success
- Complete multiple mock tests
- Study weak areas by topic
- Review the official study guides
- Build confidence before the real test

---

## 🎨 Design Features

### Color Scheme
- **Primary Blue**: Modern, trustworthy interface
- **Country-Specific Accents**: 
  - Canada: Red and white theme
  - UK: Blue and red theme
- **Neutral Grays**: Clean, professional backgrounds
- **Success/Error States**: Clear visual feedback

### Animations
- Smooth page transitions
- Hover effects on interactive elements
- Loading states and progress indicators
- Micro-interactions for better UX

### Accessibility
- Semantic HTML structure
- Keyboard navigation support
- Focus indicators
- Responsive design for all screen sizes

---

## 📊 Question Database

### Canada (100+ Questions)
- **Rights & Responsibilities**: 10 questions
- **History**: 20 questions
- **Government**: 15 questions
- **Geography**: 20 questions
- **Symbols**: 10 questions
- **Economy & Justice**: 15+ questions

### United Kingdom (100+ Questions)
- **Values & Principles**: 10 questions
- **History**: 40+ questions
- **Government & Law**: 20 questions
- **Culture**: 25+ questions
- **Geography**: 10 questions

---

## 🌐 Deployment Options

This app can be deployed on various free hosting platforms:

### Recommended: Vercel (Best for Next.js)
1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy with one click
4. **Features**: Automatic deployments, custom domains, analytics

### Alternative Options:
- **Netlify**: Easy deployment with continuous integration
- **Railway**: Simple deployment with database support
- **Render**: Free tier with automatic SSL

See the [Deployment Guide](#deployment-guide) section below for detailed instructions.

---

## 💰 Monetization Ready

The application is structured to easily integrate **Google AdSense** for monetization:

- Clean, ad-friendly layout
- Strategic placement areas for ads
- Fast loading times for better ad performance
- Mobile-responsive for maximum reach
- High-quality content that complies with AdSense policies

---

## 🔮 Future Enhancements

This app is designed to be easily expandable! Potential future additions include:

- **Additional Countries**: The architecture supports adding more citizenship tests (e.g., USA, Australia, New Zealand)
- **More Questions**: Continuously expanding the question database
- **Progress Tracking**: Save your progress and track improvement over time
- **Study Statistics**: Detailed analytics on your performance by topic
- **Multiple Languages**: Support for non-English speakers
- **Mobile App**: Native iOS and Android versions

The codebase is structured to make adding new countries straightforward - just add new question sets and country configurations!

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

---

## 📄 License

This project is open source and available for educational purposes.

---

## 🙏 Acknowledgments

- Official study materials from Government of Canada
- Life in the UK official handbook
- Next.js and React communities
- All contributors and testers

---

**Made with ❤️ for aspiring citizens of Canada and the United Kingdom**
