import { useState } from "react";
import "./App.css";

function App() {
  const [dark, setDark] = useState(true);

  return (
    <div className={dark ? "dark" : "light"}>
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">Hans</h2>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
        <button className="toggle" onClick={() => setDark(!dark)}>
          {dark ? "☀️" : "🌙"}
        </button>
      </nav>

      {/* Hero */}
      <section className="hero">
        <img src="/profile.jpg" alt="Profile" className="profile" />
        <h1>Hans Tom Sojan</h1>
        <p>Frontend Developer • React Beginner</p>
        <a href="#projects" className="btn">View Projects</a>
      </section>

      {/* About */}
      <section className="section reveal" id="about">
        <h2>About Me</h2>
        <p>
          I’m a passionate beginner frontend developer learning React.
          I love building beautiful, interactive user interfaces.
        </p>
      </section>

      {/* Skills */}
      <section className="section reveal" id="skills">
        <h2>Skills</h2>
        <div className="skills">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
        </div>
      </section>

      {/* Projects */}
      <section className="section reveal" id="projects">
        <h2>Projects</h2>
        <div className="projects">
          <div className="card">
            <h3>Portfolio Website</h3>
            <p>Modern animated portfolio using React & Vite.</p>
          </div>
          <div className="card">
            <h3>More Coming</h3>
            <p>Exciting projects coming soon.</p>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2026 Hans Tom Sojan</p>
      </footer>
    </div>
  );
}

export default App;
