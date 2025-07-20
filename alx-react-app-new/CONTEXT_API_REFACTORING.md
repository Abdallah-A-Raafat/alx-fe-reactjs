# Context API Refactoring - Before vs After

## Before: With Prop Drilling

### App.jsx (with prop drilling)

```jsx
import ProfilePage from './ProfilePage'

function App() {
  const userData = { name: 'Jane Doe', email: 'jane.doe@example.com' }

  return <ProfilePage userData={userData} />
}

export default App
```

### ProfilePage.jsx (with prop drilling)

```jsx
import UserInfo from './UserInfo'

function ProfilePage({ userData }) {
  return <UserInfo userData={userData} />
}

export default ProfilePage
```

### UserInfo.jsx (with prop drilling)

```jsx
import UserDetails from './UserDetails'

function UserInfo({ userData }) {
  return <UserDetails userData={userData} />
}

export default UserInfo
```

### UserDetails.jsx (with prop drilling)

```jsx
function UserDetails({ userData }) {
  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  )
}

export default UserDetails
```

## After: With Context API

### UserContext.js (new file)

```jsx
import React, { createContext } from 'react'

const UserContext = createContext()

export default UserContext
```

### App.jsx (with Context Provider)

```jsx
import ProfilePage from './components/ProfilePage'
import UserContext from './UserContext'

function App() {
  const userData = { name: 'Jane Doe', email: 'jane.doe@example.com' }

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  )
}

export default App
```

### ProfilePage.jsx (no props needed)

```jsx
import UserInfo from './UserInfo'

function ProfilePage() {
  return <UserInfo />
}

export default ProfilePage
```

### UserInfo.jsx (no props needed)

```jsx
import UserDetails from './UserDetails'

function UserInfo() {
  return <UserDetails />
}

export default UserInfo
```

### UserDetails.jsx (with useContext hook)

```jsx
import React, { useContext } from 'react'
import UserContext from '../UserContext'

function UserDetails() {
  const userData = useContext(UserContext)

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  )
}

export default UserDetails
```

## Benefits of Using Context API

1. **Eliminates Prop Drilling**: No need to pass props through intermediate components
2. **Cleaner Code**: Components only receive the data they actually need
3. **Better Maintainability**: Changes to data structure don't require updates to all intermediate components
4. **Improved Performance**: Intermediate components don't re-render when they don't use the context data
5. **Easier Testing**: Components can be tested independently without complex prop setups

## Key Implementation Steps

1. ✅ **Created UserContext**: Using `React.createContext()`
2. ✅ **Provider Setup**: Wrapped ProfilePage with `UserContext.Provider` in App.jsx
3. ✅ **Context Consumer**: Used `useContext(UserContext)` in UserDetails.jsx
4. ✅ **Removed Props**: Eliminated userData props from ProfilePage and UserInfo components
5. ✅ **Styled Components**: Added inline CSS styling to all components
