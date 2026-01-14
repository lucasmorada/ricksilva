import { useState, useEffect } from 'react';
import { Camera, Video, Film, Mail, Instagram, Linkedin } from 'lucide-react';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  useEffect(() => {
    document.title = 'Rick Silva - Visual Storyteller';
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className="loader-container">
          <div className="loader-text">
            <span className="text-white text-4xl font-bold tracking-widest">RICK SILVA</span>
          </div>
          <div className="loader-bar"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

      <div id="home">
        <Hero setActiveSection={setActiveSection} />
      </div>

      <div id="portfolio">
        <Portfolio />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
