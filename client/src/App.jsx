import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import CurrentlyLearning from "./components/CurrentlyLearning";
import DevelopmentProcess from "./components/DevelopmentProcess";
import WhyWorkWithMe from './components/WhyWorkWithMe';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Certifications />
        <CurrentlyLearning />
        <DevelopmentProcess />
        <WhyWorkWithMe />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;