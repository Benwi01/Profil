import React, { useEffect } from 'react';
import NavBar from './components/NavBar.jsx';
import './App.css';
import profilePic from '/Profilepic.jpg'; // Corrected path

const Home = () => (
  <section id="home" className="section flashy-home">
    <div className="home-content">
      <img src={profilePic} alt="Profile" className="profile-pic animated fadeIn" />
      <div className="description animated fadeIn">
        <h1 className="animated bounceIn">Hej! Mit navn er Benjamin Wiese</h1>
        <p className="animated fadeInUp"> Jeg studerer IT-Arkitektur på Aarhus Erhvervsakademi, og er i gang med 4.semester. Jeg er en meget passioneret omkring softwareudvikling og har både erfaring med back-end og front-end. Jeg elsker at udvikle kreative løsninger, der giver en værdi for brugerne.</p>
        
      </div>
    </div>
  </section>
);

const Projects = () => (
  <section id="projects" className="section projects-section">
    <h1>Projekter</h1>
    <div className="projects-grid">
      <div className="project-card">
        <h2>Medicin Ordinationsprojekt</h2>
        <p>Et medicin ordinationsprojekt udviklet i C# og ASP.NET. Funktionerne består at at kunne oprette, slette og redigere ordinationer til patienter.</p>
        <div className="project-logos">
          <img src="csharp-logo.svg" alt="C#" className="tech-logo" />
          <img src="html-logo.svg" alt="HTML" className="tech-logo" />
          <img src="dotnet-logo.svg" alt=".NET" className="tech-logo" />
          <img src="css-logo.svg" alt="CSS" className="tech-logo" />
        </div>
        <div className="project-buttons">
          <a href="https://github.com/Levinuet/OrdinationMedication" className="btn github-btn" target="_blank" rel="noopener noreferrer">
            <img src="github-logo.svg" alt="GitHub" className="github-logo" /> GitHub
          </a>
        </div>
      </div>
      <div className="project-card">
        <h2>Reddit Projekt</h2>
        <p>En klon af Reddit udviklet med C# og entity framework. Projektets funktionaliteter er at oprette og slette posts, samt at kunne kommentere på dem.</p>
        <div className="project-logos">
          <img src="dotnet-logo.svg" alt=".NET" className="tech-logo" />
          <img src="csharp-logo.svg" alt="C#" className="tech-logo" />
          <img src="css-logo.svg" alt="CSS" className="tech-logo" />
          <img src="html-logo.svg" alt="HTML" className="tech-logo" />
        </div>
        <div className="project-buttons">
          <a href="https://github.com/Benwi01/Redditclone" className="btn github-btn" target="_blank" rel="noopener noreferrer">
            <img src="github-logo.svg" alt="GitHub" className="github-logo" /> GitHub
          </a>
        </div>
      </div>
      <div className="project-card">
        <h2>Full Stack tilmeldingssystem til Cirkus Sumarrum Børneklub</h2>
        <p>Som eksamensprojekt i 2.Semester har mig og min studiegruppe udviklet en full-stack Blazor applikation for Muskelsvindsfonden. Systemet håndterer tilmelding samt administration af børnepasning for de frivillige der arbejder på Cirkussummarum.</p>
        <div className="project-logos">
          <img src="css-logo.svg" alt="CSS" className="tech-logo" />
          <img src="mongodb-logo.svg" alt="MongoDB" className="tech-logo" />
          <img src="dotnet-logo.svg" alt=".NET" className="tech-logo" />
          <img src="csharp-logo.svg" alt="C#" className="tech-logo" />
          <img src="javascri-logo.svg" alt="JavaScript" className="tech-logo" />
          <img src="html-logo.svg" alt="HTML" className="tech-logo" />
        </div>
        <div className="project-buttons">
          <a href="https://github.com/Levinuet/CirkusSummarum" className="btn github-btn" target="_blank" rel="noopener noreferrer">
            <img src="github-logo.svg" alt="GitHub" className="github-logo" /> GitHub
          </a>
        </div>
      </div>
      {/* Add more project cards as needed */}
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="section contact-section">
    <h1>Kontakt mig</h1>
    <p>Hvis du leder efter en praktikant med gåpåmod og stor interesse for softwareudvikling og IT-Arkitektur. Så leder jeg i øjeblikket efter en praktikplads.</p>
    <h2>Benjamin Damholt Ruders Wiese</h2>
    <div className="contact-info">
      <div className="contact-buttons">
        <a href="https://www.linkedin.com/in/benjamin-wiese-b56b38354/" className="btn contact-btn" target="_blank" rel="noopener noreferrer">
          <img src="LinkedIn.svg" alt="LinkedIn" className="contact-logo" />LinkedIn
        </a>
        <a href="https://github.com/Benwi01" className="btn contact-btn" target="_blank" rel="noopener noreferrer">
          <img src="github-logo.svg" alt="GitHub" className="contact-logo" />Github
        </a>
      </div>
      <p><img src="email-logo.svg" alt="Email" className="contact-logo" /> Benjamin060101@gmail.com</p>
      <p><img src="phone-logo.svg" alt="Phone" className="contact-logo" /> +45 20950151</p>
      <p><img src="location-logo.svg" alt="Location" className="contact-logo" /> Aarhus C, DK</p>
    </div>
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