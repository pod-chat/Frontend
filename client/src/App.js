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
import ForgotPassword from "./Authentication/ForgotPassword";

//Styling Imports
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/forgot-password">
        <ForgotPassword />
      </Route>

      <Switch>
        <Route exact path="/search">
          <Navigation />
          <SearchPod />
        </Route>
        <Route path="/post">
          <Navigation />
          <PostFull />
          <Navigation />
        </Route>
        <Route exact path="/">
          <Navigation />
          <PostFeed />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
