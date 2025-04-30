import './index.css';
import Navbar from './components/Navbar';
import Header from './sections/Header'
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function App() {

  return (
    <>
    <Navbar />
      <div className="scroll-smooth">
        <section><Header /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </div>
    </>
  )
}

export default App
