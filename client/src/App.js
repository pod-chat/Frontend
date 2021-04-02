import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Component Imports
import Navigation from './components/Navigation'
import PostFeed from './PostFeed'
import PostFull from './PostFull'
import SearchPod from './components/SearchPod';

//Styling Imports
import './App.css';

function App() {
  return (
    <div className='App'> 
      <Navigation/> 
      <Switch>
        <Route path ='/search'>
            <SearchPod />
        </Route>
        <Route path='/post'>
          <PostFull />
        </Route>
        <Route exact path='/'>
          <PostFeed />
        </Route>

      </Switch>
    </div>
  )
}

export default App;
