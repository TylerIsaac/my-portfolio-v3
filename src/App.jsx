import './index.css';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Header from './sections/Header'
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in ms
      easing: 'ease-in-out', // Easing function
      once: true, // Whether animation should happen only once while scrolling down
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="scroll-smooth">
        <section><Header /></section>
        <section id="about"><About /></section>
        <section id="skills">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white" data-aos="fade-up">My Skills</h2>
          </div>
        </section>
        <section ><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </div>
    </>
  )
}

export default App
