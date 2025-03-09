import styles from './App.module.css';
import { Navbar } from './components/Navbar/Navbar';
import { Myself } from './components/Myself/Myself';
import { AboutMe } from './components/AboutMe/AboutMe';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';

function App() {
  
  return (<div className={styles.App}>
    <div className={styles.scrollBars}>
      <div style={{overflowX: 'hidden', overflowY: 'auto'}}>
        <Navbar/>
        <Myself/>
        <AboutMe/>
        <Experience/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  </div>
    
  );
}

export default App;
