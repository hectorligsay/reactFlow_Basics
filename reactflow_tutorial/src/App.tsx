// src/App.tsx
import React from "react";
import { Routes, Route, Link } from "react-router-dom";

const Home = () => (
  <div>
    <h2>Home Page</h2>
    <p>Welcome to the homepage!</p>
  </div>
);

const About = () => (
  <div>
    <h2>About Page</h2>
    <p>This is the about page.</p>
  </div>
);

const NotFound = () => (
  <div>
    <h2>404 Not Found</h2>
    <p>The page you're looking for does not exist.</p>
  </div>
);

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
