import "./App.css";
import Schedule from "./Components/Schedule.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/home.js";
import About from "./Pages/about.js";
import { SignIn, SignOut, useAuthentication } from "./authService";

// npm i react-router-dom react-icons styled-components react-big-calendar date-fns axios @material-ui/core

export function App() {

  const user = useAuthentication();

  return (
    <Router>
      <div className="App"></div>
      <header>{!user ? <SignIn /> : <SignOut />}</header>
      {user ? (
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/welcome" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/schedule" element={<Schedule />} />
        </Routes>
      ) : (
        <Routes></Routes>
      )}
    </Router>
  )
}

export default App
