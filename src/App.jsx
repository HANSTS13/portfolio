import "./App.css";

function App() {
  return (
    <div className="container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Hans Tom Sojan</h1>
        <p>Frontend Developer | React Beginner</p>
        <a href="#projects" className="btn">View My Work</a>
      </section>

      {/* About Section */}
      <section className="section">
        <h2>About Me</h2>
        <p>
          I am a beginner frontend developer learning React.
          I enjoy building simple, clean, and user-friendly websites.
        </p>
      </section>

      {/* Skills Section */}
      <section className="section">
        <h2>Skills</h2>
        <div className="skills">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section" id="projects">
        <h2>Projects</h2>
        <div className="projects">
          <div className="card">
            <h3>Portfolio Website</h3>
            <p>A personal portfolio built with React and Vite.</p>
          </div>

          <div className="card">
            <h3>Coming Soon</h3>
            <p>More projects will be added.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Hans Tom Sojan</p>
      </footer>
    </div>
  );
}

export default App;
