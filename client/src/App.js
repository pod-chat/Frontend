import React from 'react'
import Navigation from './components/Navigation'
import PostFeed from './PostFeed'
import './App.css';

function App() {
  return (
    <div className='App'> 
      <Navigation/> 
      <PostFeed />
    </div>
  )
}

export default App;
