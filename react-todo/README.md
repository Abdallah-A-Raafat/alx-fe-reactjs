# React Todo List App

A fully functional Todo List application built with React, featuring comprehensive testing with Jest and React Testing Library.

## Features

- ✅ Display a list of todo items
- ➕ Add new todos
- ✓ Toggle todo completion status
- 🗑️ Delete individual todos
- 🧪 Comprehensive test coverage
- 🎨 Clean, responsive design

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm

### Installation

1. Clone the repository or navigate to the project directory:

```bash
cd react-todo
```

2. Install dependencies:

```bash
npm install
```

### Available Scripts

#### Development

```bash
npm run dev
```

Runs the app in development mode. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

#### Testing

```bash
npm test
```

Runs the test suite using Jest and React Testing Library.

#### Build

```bash
npm run build
```

Builds the app for production to the `dist` folder.

#### Lint

```bash
npm run lint
```

Runs ESLint to check for code quality issues.

## Component Structure

### TodoList Component

The main component that manages the todo list state and renders the interface.

**Features:**

- Manages an array of todo items with `id`, `text`, and `completed` properties
- Provides methods for adding, toggling, and deleting todos
- Renders the AddTodoForm and todo items

### AddTodoForm Component

A form component for adding new todos.

**Features:**

- Controlled input for entering new todo text
- Form validation (prevents empty or whitespace-only todos)
- Clears input after successful submission

## Testing

The application includes comprehensive tests covering:

### Initial Render Tests

- ✅ Renders todo list with initial todos
- ✅ Displays all required UI elements

### Add Todo Tests

- ✅ Adds new todos when form is submitted
- ✅ Prevents adding empty todos
- ✅ Prevents adding whitespace-only todos
- ✅ Form submission works with Enter key

### Toggle Todo Tests

- ✅ Toggles todo completion status when clicked
- ✅ Updates visual appearance (line-through styling)

### Delete Todo Tests

- ✅ Deletes todos when delete button is clicked
- ✅ Removes todo from the list

### Integration Tests

- ✅ Handles multiple operations correctly (add, toggle, delete)

### Running Tests

```bash
npm test
```

Tests are located in the `src/__tests__/` directory and use:

- **Jest** as the test runner
- **React Testing Library** for component testing
- **@testing-library/user-event** for user interaction simulation
- **@testing-library/jest-dom** for additional DOM matchers

## Project Structure

```
react-todo/
├── src/
│   ├── components/
│   │   ├── TodoList.jsx
│   │   └── TodoList.css
│   ├── __tests__/
│   │   └── TodoList.test.js
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   ├── index.css
│   └── setupTests.js
├── __mocks__/
│   └── fileMock.js
├── public/
├── .babelrc
├── jest.config.js
├── package.json
└── README.md
```

## Technical Details

### State Management

- Uses React's `useState` hook for local state management
- Todo items are stored as an array of objects with `id`, `text`, and `completed` properties

### Styling

- Custom CSS with modern, clean design
- Responsive layout
- Visual feedback for completed todos
- Hover effects for interactive elements

### Form Handling

- Controlled components for form inputs
- Prevents default form submission
- Input validation and sanitization

### Testing Strategy

- Unit tests for individual component functionality
- Integration tests for component interactions
- User interaction simulation with realistic scenarios
- DOM queries that mirror how users interact with the app

## Browser Support

This application supports all modern browsers that support ES6+ features.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Add tests for new functionality
4. Ensure all tests pass
5. Submit a pull request

## License

This project is part of the ALX Frontend React.js curriculum.+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
