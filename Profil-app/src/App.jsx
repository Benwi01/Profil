import React, { useEffect } from 'react';
import NavBar from './components/NavBar.jsx';
import './App.css';
import profilePic from '/Profilepic.jpg'; // Corrected path

const Home = () => (
  <section id="home" className="section flashy-home">
    <div className="home-content">
      <img src={profilePic} alt="Profile" className="profile-pic animated fadeIn" />
      <div className="description animated fadeIn">
        <h1 className="animated bounceIn">Welcome to My Portfolio</h1>
        <p className="animated fadeInUp">Hello! I'm [Your Name], a passionate developer with experience in [Your Skills/Technologies]. I love creating innovative solutions and working on exciting projects. Feel free to explore my portfolio and get in touch!</p>
        <p className="animated fadeInUp">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </div>
  </section>
);

const Projects = () => (
  <section id="projects" className="section">
    <h1>Projects</h1>
    <div className="projects-grid">
      <div className="project-card">
        <h2>Project 1</h2>
        <p>Description of Project 1.</p>
        <a href="#project1">View Project</a>
      </div>
      <div className="project-card">
        <h2>Project 2</h2>
        <p>Description of Project 2.</p>
        <a href="#project2">View Project</a>
      </div>
      <div className="project-card">
        <h2>Project 3</h2>
        <p>Description of Project 3.</p>
        <a href="#project3">View Project</a>
      </div>
      {/* Add more project cards as needed */}
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="section">
    <h1>Contact</h1>
    <p>Get in touch with me. You can reach me via email or through my social media profiles.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  </section>
);

const App = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      const windowHeight = window.innerHeight;
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < windowHeight - 100) {
          section.classList.add('visible');
        } else {
          section.classList.remove('visible');
        }
      });

      const navbar = document.querySelector('.navbar');
      if (window.scrollY > windowHeight - 100) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <NavBar />
      <Home />
      <Projects />
      <Contact />
      <footer>
        <p>&copy; 2025 My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;