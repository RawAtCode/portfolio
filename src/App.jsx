import '../src/app.scss'
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Projects from './components/projects/Projects'
import Parallax from './components/parallax/Parallax';
import Contact from './components/contact/Contact';
import About from './components/about/About';


const App = () => {
  return <div>
    <section id='Home'>
      <Navbar />
      <Hero />
    </section>
    <section id='About'>
      <Parallax type="about" />
    </section>
    <section>
      <About />
    </section>
    <section id='Projects'>
      <Parallax type="projects" />
    </section>
    <Projects />
    <section id='Contact'>
      <Contact />
    </section>
  </div>;
};

export default App;
