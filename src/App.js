import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Toggle dark mode class based on state
    document.body.className = darkMode ? "dark-mode" : "";
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul className="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <button onClick={toggleDarkMode}>
                {darkMode ? "Light Mode" : "Dark Mode"}
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to my portfolio!</h1>
          <p>I'm a developer and designer based in India.</p>
          <a href="#portfolio" className="cta-btn">
            Explore My Work
          </a>
        </div>
        <img
          className="hero-background"
          src="background.jpg"
          alt="Background"
        />
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <img src="profile.jpg" alt="Profile" className="profile-pic" />
        <div className="about-text">
          <h2>About me</h2>
          <p>
            I'm a highly motivated individual with a passion for building
            beautiful and functional websites. With years of experience in
            front-end development, I aim to blend design with technology to
            create user-centric experiences.
          </p>
          <p>
            I started my journey as a self-taught developer and have worked with
            various clients worldwide. When not coding, I enjoy sketching and
            exploring new design trends.
          </p>
          <a href="portfolio.pdf" download className="cta-btn">
            Download my Portfolio (PDF)
          </a>
          <h3>Skills:</h3>
          <ul>
            <li>HTML/CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>UI/UX Design</li>
          </ul>
        </div>
      </section>

      {/* Portfolio Section with Case Studies */}
      <section id="portfolio" className="portfolio">
        <h2>My work</h2>
        <div className="grid">
          <div className="grid-item">
            <img src="project1.jpg" alt="Project 1" loading="lazy" />
            <h3>Project 1</h3>
            <p>A complex web application built using React and Firebase.</p>
            <a
              href="https://github.com/your-username/project1"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
            <button>View Live Demo</button>
          </div>
          <div className="grid-item">
            <img src="project2.jpg" alt="Project 2" loading="lazy" />
            <h3>Project 2</h3>
            <p>An eCommerce platform built with modern web technologies.</p>
            <a
              href="https://github.com/your-username/project2"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
            <button>View Live Demo</button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="blog">
        <h2>Insights & Blog</h2>
        <p>
          Coming soon: Read my thoughts on web development, design, and more!
        </p>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials">
        <h2>What Clients Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-item">
            <p>
              "Working with [Your Name] was a game-changer. Their attention to
              detail and creativity helped bring our vision to life!"
            </p>
            <h4>- Client 1</h4>
          </div>
          <div className="testimonial-item">
            <p>
              "I highly recommend [Your Name] for any web development project.
              Their work is exceptional!"
            </p>
            <h4>- Client 2</h4>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Get in touch</h2>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" required></textarea>
          <button>Send</button>
        </form>
        <ul className="social-links">
          <li>
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/your-username/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
        </ul>
      </section>

      <footer>
        <p> 2024 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
