import React from "react";
import { Route, Switch } from "react-router-dom";

//Component Imports
import Navigation from "./components/Navigation";
import PostFeed from "./PostFeed";
import PostFull from "./PostFull";
import SearchPod from "./SearchPod";
import NewPost from "./NewPost";

// Authentication
import Login from "./Authentication/Login";
import SignUp from "./Authentication/Signup";
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
        <SignUp />
      </Route>
      <Route path="/forgot-password">
        <ForgotPassword />
      </Route>

      <Switch>
        <Route exact path="/search">
          <Navigation />
          <SearchPod />
        </Route>
        <Route exact path="/newpost">
          <Navigation />
          <NewPost />
        </Route>
        <Route path="/post">
          <Navigation />
          <PostFull />
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
