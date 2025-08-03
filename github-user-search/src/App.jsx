import './App.css';
import { Search } from './components';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>GitHub User Search</h1>
        <p>Search for GitHub users and explore their profiles</p>
      </header>
      
      <main className="app-main">
        <Search />
      </main>
    </div>
  );
}

export default App;
