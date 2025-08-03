# GitHub User Search Application

A modern, responsive React application for searching GitHub users with advanced filtering capabilities. Built with React, Tailwind CSS, and the GitHub API.

## 🚀 Features

- **Advanced Search**: Search users by username, location, and minimum repository count
- **Smart API Integration**: Intelligent fallback between direct user lookup and search API
- **Detailed User Profiles**: View comprehensive user information including repositories
- **Responsive Design**: Mobile-friendly interface with Tailwind CSS
- **Real-time Results**: Fast, paginated search results with loading states
- **Production Ready**: Optimized build with code splitting and caching

## 🛠️ Technologies Used

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS 3.4
- **HTTP Client**: Axios
- **API**: GitHub REST API v3
- **Deployment**: Vercel

## 📦 Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd github-user-search

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🔧 Environment Variables

Create a `.env` file in the root directory:

```env
# Optional: GitHub API Key for increased rate limits
VITE_APP_GITHUB_API_KEY=your_github_token_here
```

## 🏗️ Build Commands

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm run preview      # Preview production build locally

# Linting
npm run lint         # Run ESLint
```

## 🌐 Deployment to Vercel

### Step 1: Prepare Repository

1. Ensure all code is committed to GitHub
2. Environment variables are in `.gitignore`
3. Production build works: `npm run build`

### Step 2: Vercel Setup

1. Visit [vercel.com](https://vercel.com) and create an account
2. Click "New Project" and import from GitHub
3. Select your repository
4. Vercel will auto-detect Vite framework settings

### Step 3: Configure Environment Variables

In Vercel dashboard → Project Settings → Environment Variables:

```
VITE_APP_GITHUB_API_KEY = your_github_token_here
```

### Step 4: Deploy

- Vercel will automatically deploy on every push to main branch
- Manual deployments available in dashboard
- Build logs and errors visible in real-time

## 🔗 API Endpoints Used

- `https://api.github.com/search/users?q={query}` - User search
- `https://api.github.com/users/{username}` - User details
- `https://api.github.com/users/{username}/repos` - User repositories

## 📱 Usage

1. **Basic Search**: Enter a GitHub username to find users
2. **Advanced Filters**: Add location and minimum repository count
3. **View Details**: Click on any user card to see detailed information
4. **Browse Repositories**: View user's recent repositories with stats
5. **Pagination**: Navigate through multiple pages of results

## 🎯 Performance Optimizations

- Code splitting with manual chunks
- Lazy loading of detailed user information
- Optimized API requests with intelligent caching
- Minified production build with esbuild
- Static asset caching with long-term headers

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔍 Live Demo

[View Live Application](https://your-app-name.vercel.app)

---

Built with ❤️ for the ALX Frontend React.js Program
