import './App.css'
import Header from './components/Header'
import UserProfile from './components/UserProfile'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import Counter from './components/Counter'
import ProfilePage from './components/ProfilePage'
import UserContext from './UserContext'

function App() {
  // User data that will be provided through Context
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

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
      
      {/* Context API Implementation - No Prop Drilling */}
      <UserContext.Provider value={userData}>
        <ProfilePage />
      </UserContext.Provider>
      
      <Footer />
    </div>
  )
}

export default App
