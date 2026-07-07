import "./App.css";

function App() {
  return (
    <div className="container">
      <nav> 
        <ul className="navbar">
  <li><a href="#home">Home</a></li>
  <li><a href="#about">About</a></li>
  <li><a href="#skills">Skills</a></li>
  <li><a href="#projects">Projects</a></li>
  <li><a href="#contact">Contact</a></li>
</ul>
      </nav>
      <section>
        <img 
        src="hariprofile.jpeg" alt="Hari Ganesh S M"  className="profile-img"/>
        <h1>Hi, I'm Hari Ganesh S M 👋</h1>

        <h2>Full Stack Web Developer</h2>

        <p>
          B.Sc Computer Science Graduate | React | Node.js | Express.js |
          MongoDB | Python
        </p>
<a href="HARI GANESH S M.pdf" download>
        <button>Download Resume</button>
        </a>
        <button style={{ marginLeft: "20px" }}>
<a href="#contact" style={{marginRight: "20px"}}>
  <button>Contact Me</button>
</a>
            
        </button>
      </section>
      <section id="about">
  <h2>About Me</h2>

  <p>
    I am Hari Ganesh S M, a B.Sc Computer Science graduate and Full Stack
    Web Developer. I enjoy building responsive websites using React,
    Node.js, Express.js, MongoDB and Python. I love learning new
    technologies and building real-world web applications.
  </p>
</section>
<section id="skills">
  <h2>My Skills</h2>

  <div className="skills">

    <div className="skill-card">HTML</div>

    <div className="skill-card">CSS</div>

    <div className="skill-card">JavaScript</div>

    <div className="skill-card">React.js</div>

    <div className="skill-card">Node.js</div>

    <div className="skill-card">Express.js</div>

    <div className="skill-card">MongoDB</div>

    <div className="skill-card">Python</div>

  </div>
</section>
<section id="projects">
  <h2>My Projects</h2>

  <div className="project-card">
    <h3>🎵 Music Web Application</h3>
    <p>
      Built a music streaming web application using React, Node.js,
      Express.js and MongoDB.
    </p>
  </div>

  <div className="project-card">
    <h3>🤖 Social Media Automation</h3>
    <p>
      Developed a real-time social media automation project during my internship.
    </p>
  </div>

  <div className="project-card">
    <h3>💻 Personal Portfolio</h3>
    <p>
      Designed and developed my own responsive portfolio using React.
    </p>
  </div>
</section>
<section id="contact">
  <h2>Contact Me</h2>

  <p>📧 Email: saiganeshsurya16@gmail.com</p>

  <p>📱 Phone: +91 9342969091</p>
<p>
  💻 GitHub:
  <a
    href="https://github.com/HariGanesh48"
    target="_blank"
    rel="noopener noreferrer"
  >
    HariGanesh48
  </a>
</p>

<p>
  🔗 LinkedIn:
  <a
    href="https://www.linkedin.com/in/hari--ganesh"
    target="_blank"
    rel="noopener noreferrer"
  >
    My LinkedIn
  </a>
</p>
 
</section>
<footer className="footer">
  <p>© 2026 Hari Ganesh S M. All Rights Reserved.</p>
  <p>Built with ❤️ using React.js</p>
</footer>
    </div>
  );
}

export default App;