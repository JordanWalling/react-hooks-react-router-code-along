import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
// import { Switch } from "react-router-dom/cjs/react-router-dom.min";

import Login from "./components/Login";
import About from "./components/About";
import Signup from "./components/Signup";
import Messages from "./components/Messages";

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function Navbar() {
  return (
    <div>
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{ background: "darkblue" }}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        exact
        style={linkStyles}
        activeStyle={{ background: "darkblue" }}
      >
        About
      </NavLink>
      <NavLink
        to="/login"
        exact
        style={linkStyles}
        activeStyle={{ background: "darkblue" }}
      >
        Login
      </NavLink>
      <NavLink
        to="/signup"
        exact
        style={linkStyles}
        activeStyle={{ background: "darkblue" }}
      >
        Sign Up
      </NavLink>
      <NavLink
        to="/messages"
        exact
        style={linkStyles}
        activeStyle={{ background: "darkblue" }}
      >
        Messages
      </NavLink>
    </div>
  );
}
function Home() {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/messages">
          <Messages />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
