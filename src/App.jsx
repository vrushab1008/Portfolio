import './App.css';
import Aboutme from './components/Aboutme';
import Contact from './components/Contact';
import Education from './components/Eduction';
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Skills from './components/Skills';

function App() {
  return (
    <div className="app">
      <Navigation />
      <Resume />
      <Aboutme />
      <Skills />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
