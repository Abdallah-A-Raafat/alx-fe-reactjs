# 🚀 Advanced React Development Hub

[![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4+-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React Query](https://img.shields.io/badge/React_Query-4+-FF4154?style=for-the-badge&logo=react-query&logoColor=white)](https://tanstack.com/query)
[![React Router](https://img.shields.io/badge/React_Router-6+-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![Formik](https://img.shields.io/badge/Formik-2+-172B4D?style=for-the-badge&logo=formik&logoColor=white)](https://formik.org/)
[![Jest](https://img.shields.io/badge/Jest-29+-C21325?style=for-the-badge&logo=jest&logoColor=white)](https://jestjs.io/)

A comprehensive React application showcasing modern development practices, advanced patterns, and best practices in frontend development. This project demonstrates form handling, data fetching, routing, testing, and state management using industry-standard libraries.

## ✨ Features

### 📝 **Form Management**

- **Controlled Components** - Traditional React form handling with state management
- **Formik Integration** - Advanced form handling with validation and error management
- **Yup Validation** - Schema-based form validation
- **Real-time Validation** - Instant feedback on form inputs

### 🌐 **Data Fetching & Caching**

- **React Query** - Server state management with intelligent caching
- **API Integration** - JSONPlaceholder API for realistic data operations
- **Loading States** - Beautiful loading indicators and error handling
- **Background Refetching** - Automatic data synchronization

### 🧭 **Advanced Routing**

- **React Router v6** - Modern routing with nested routes
- **Protected Routes** - Authentication-based route protection
- **Dynamic Routing** - URL parameters and dynamic content
- **Nested Layouts** - Complex layout hierarchies

### ✅ **Todo Management**

- **CRUD Operations** - Create, read, update, delete todos
- **State Persistence** - Local state management
- **Interactive UI** - Drag, drop, and toggle functionality
- **Comprehensive Testing** - Full test coverage with Jest & React Testing Library

### 🎨 **Modern UI/UX**

- **Glassmorphism Design** - Modern frosted glass aesthetic
- **Gradient Animations** - Smooth color transitions and effects
- **Responsive Layout** - Mobile-first responsive design
- **Interactive Elements** - Hover effects and micro-interactions

## 🛠 Tech Stack

| Technology                | Purpose                 | Version |
| ------------------------- | ----------------------- | ------- |
| **React**                 | Frontend Framework      | 18+     |
| **Vite**                  | Build Tool & Dev Server | 4+      |
| **React Query**           | Server State Management | 4+      |
| **React Router**          | Client-side Routing     | 6+      |
| **Formik**                | Form Management         | 2+      |
| **Yup**                   | Schema Validation       | 1+      |
| **Jest**                  | Testing Framework       | 29+     |
| **React Testing Library** | Component Testing       | 13+     |
| **CSS3**                  | Styling & Animations    | -       |

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm/yarn
- Modern web browser with ES6+ support

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Abdallah-A-Raafat/alx-fe-reactjs.git
   cd alx-fe-reactjs/form-handling-react
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the application

## 🧪 Testing

Run the comprehensive test suite:

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch
```

## 📦 Build & Deployment

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview

# Lint code
npm run lint
```

## 🏗 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Navigation.jsx   # Main navigation bar
│   ├── RegistrationForm.jsx # Controlled form component
│   ├── formikForm.js    # Formik-based form
│   ├── PostsComponent.jsx # React Query data fetching
│   ├── TodoList.jsx     # Todo management component
│   ├── Profile.jsx      # User profile with nested routes
│   ├── ProtectedRoute.jsx # Authentication wrapper
│   └── Login.jsx        # Authentication component
├── __tests__/           # Test files
│   └── TodoList.test.js # Component tests
├── App.jsx              # Main application component
├── main.jsx             # Application entry point
└── index.css            # Global styles and animations
```

## 🎯 Key Learning Objectives

### 🎨 **Form Handling Mastery**

- Master controlled vs uncontrolled components
- Implement complex validation logic
- Handle form state efficiently
- Create reusable form components

### 📊 **State Management Patterns**

- Server state vs client state separation
- Caching strategies and optimization
- Real-time data synchronization
- Error boundary implementation

### 🛣 **Routing Architecture**

- Nested route structures
- Route-based code splitting
- Authentication flows
- URL state management

### 🧪 **Testing Best Practices**

- Component testing strategies
- Integration testing patterns
- Mocking external dependencies
- Test-driven development (TDD)

## 🎨 Design System

### Color Palette

- **Primary**: `#4f46e5` (Indigo)
- **Secondary**: `#06b6d4` (Cyan)
- **Success**: `#10b981` (Emerald)
- **Error**: `#ef4444` (Red)
- **Warning**: `#f59e0b` (Amber)

### Typography

- **Font Family**: Inter, Segoe UI, system fonts
- **Headings**: 600-700 weight with gradient effects
- **Body**: 400-500 weight with optimal line height

### Effects

- **Glassmorphism**: `backdrop-filter: blur(20px)`
- **Shadows**: Layered box-shadows for depth
- **Animations**: CSS transitions and keyframes

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is part of the ALX Frontend React.js curriculum and is intended for educational purposes.

## 🙏 Acknowledgments

- [ALX School](https://www.alxafrica.com/) for the comprehensive curriculum
- [React Team](https://reactjs.org/) for the amazing framework
- [Vite Team](https://vitejs.dev/) for the lightning-fast build tool
- [TanStack](https://tanstack.com/) for React Query
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) for the mock API

---

<div align="center">
  <p>Built with ❤️ by <a href="https://github.com/Abdallah-A-Raafat">Abdallah A. Raafat</a></p>
  <p><em>Showcasing modern React development practices</em></p>
</div>
