import "./App.css";

function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">Hans</h2>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
      </nav>

      {/* Hero */}
      <section className="hero">
        <h1>Hans Tom Sojan</h1>
        <p>Frontend Developer • React Beginner</p>
        <a href="#projects" className="btn">Explore My Work</a>
      </section>

      {/* About */}
      <section className="section" id="about">
        <h2>About Me</h2>
        <p>
          I am a passionate beginner frontend developer learning React.
          I love building clean, modern, and user-friendly websites.
        </p>
      </section>

      {/* Skills */}
      <section className="section" id="skills">
        <h2>Skills</h2>
        <div className="skills">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
        </div>
      </section>

      {/* Projects */}
      <section className="section" id="projects">
        <h2>Projects</h2>
        <div className="projects">
          <div className="card">
            <h3>Portfolio Website</h3>
            <p>Modern portfolio built using React & Vite.</p>
          </div>

          <div className="card">
            <h3>Coming Soon</h3>
            <p>More exciting projects on the way.</p>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2026 Hans Tom Sojan</p>
      </footer>
    </>
  );
}

export default App;
