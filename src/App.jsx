import { useState } from "react";
import "./App.css";
import profile from "./assets/profile.jpg";

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
       <img
  src={profile}
  alt="Hans profile"
  className="profile-image"
/>
<section className="section">
  <h2>About Me</h2>
  <p>
    I am a Computer Science student with a strong interest in software
    development. I enjoy learning new technologies and building applications
    that solve real problems.
  </p>
</section>

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
<section className="section">
  <h2>Skills</h2>

  <div className="skills">
    <span>Java</span>
    <span>Python</span>
    <span>C</span>
    <span>HTML</span>
    <span>CSS</span>
    <span>JavaScript</span>
    <span>React</span>
  </div>
</section>

      {/* Skills */}
      <section className="section reveal" id="skills">
        <h2>Skills</h2>
        <div className="skills">
  <span>HTML</span>
  <span>CSS</span>
  <span>JavaScript</span>
  <span>React</span>
  <span>Java</span>
  <span>Python</span>
  <span>C</span>
</div>

      </section>

      {/* Projects */}
     <section id="projects">
  <h2>Projects</h2>

  <div className="projects">

    <div className="project-card">
      <h3>Portfolio Website</h3>
      <p>Modern animated portfolio using React & Vite.</p>

      <div className="tags">
        <span>React</span>
        <span>Vite</span>
      </div>
    </div>

    <div className="project-card">
      <h3>Inventory Management System</h3>
      <p>
        Desktop-based inventory management system developed using Java Swing.
        Supports product management, stock tracking, and basic CRUD operations
        with a user-friendly interface.
      </p>

      <div className="tags">
        <span>Java</span>
        <span>Java Swing</span>
        <span>Desktop App</span>
      </div>

      <div className="project-actions">
        <a href="#" className="btn-outline">Details</a>
      </div>
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
