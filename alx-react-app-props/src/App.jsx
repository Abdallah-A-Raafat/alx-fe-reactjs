import './App.css'
import Header from './components/Header'
import UserProfile from './components/UserProfile'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import Counter from './components/Counter'

function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      
      <div style={{ padding: '20px' }}>
        <UserProfile 
          name="John Doe" 
          age={28} 
          bio="A passionate traveler who loves exploring new cities and cultures around the world." 
        />
        <UserProfile 
          name="Jane Smith" 
          age={32} 
          bio="Urban explorer and photographer capturing the beauty of metropolitan areas." 
        />
      </div>
      
      <MainContent />
      
      <Counter />
      
      <Footer />
    </div>
  )
}

export default App
