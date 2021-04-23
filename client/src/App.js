import React from "react";
import { Route, Switch } from "react-router-dom";

//Component Imports
import Navigation from "./components/Navigation";
import PostFeed from "./PostFeed";
import PostFull from "./PostFull";
import SearchPod from "./SearchPod";

// Authentication
import Login from "./Authentication/Login";
import Signup from "./Authentication/Signup";

//Styling Imports
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route path="/login">
        <Login />
      </Route>
      <Navigation />
      <Switch>
        <Route exact path="/search">
          <SearchPod />
        </Route>
        <Route path="/post">
          <PostFull />
        </Route>
        <Route exact path="/">
          <PostFeed />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
