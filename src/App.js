import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <hero>
        <h1>Welcome to my portfolio!</h1>
        <p>I'm a developer and designer based in India.</p>
        <img src="background.jpg" alt="Background" />
      </hero>
      <about>
        <img src="profile.jpg" alt="Profile" />
        <h2>About me</h2>
        <p>
          I'm a highly motivated and detail-oriented individual with a passion
          for building beautiful and functional websites.
        </p>
        <h3>Skills:</h3>
        <ul>
          <li>HTML/CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>UI/UX Design</li>
        </ul>
      </about>
      <portfolio>
        <h2>My work</h2>
        <div className="grid">
          <div className="grid-item">
            <img src="project1.jpg" alt="Project 1" />
            <h3>Project 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button>View project</button>
          </div>
          <div className="grid-item">
            <img src="project2.jpg" alt="Project 2" />
            <h3>Project 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button>View project</button>
          </div>
        </div>
      </portfolio>
      <portfolio>
        <h2>My work</h2>
        <div className="grid">
          <div className="grid-item">
            <img src="project1.jpg" alt="Project 1" />
            <h3>Project 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button>View project</button>
          </div>
          <div className="grid-item">
            <img src="project2.jpg" alt="Project 2" />
            <h3>Project 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button>View project</button>
          </div>
        </div>
      </portfolio>
      <contact>
        <h2>Get in touch</h2>
        <form>
          <input type="name" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button>Send</button>
        </form>
        <ul>
          <li>
            <a href="https://github.com/your-username" target="_blank">
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/your-username/"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://twitter.com/your-username" target="_blank">
              Twitter
            </a>
          </li>
        </ul>
      </contact>
      <footer>
        <p> 2024 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
