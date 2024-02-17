import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'

function App() {
  return (
      <>

         <Navbar/>
         <Home/>
         <About/>
         <Skills/>
         <Projects/>
         <Contact/>
      
      </>
  );
}

export default App;
