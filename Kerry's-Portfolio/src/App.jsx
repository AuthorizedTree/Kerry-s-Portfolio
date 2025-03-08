import styles from './App.module.css';
import { Navbar } from './components/Navbar/Navbar';
import { Myself } from './components/Myself/Myself';
import { AboutMe } from './components/AboutMe/AboutMe';

function App() {
  
  return (<div className={styles.App}>
    <Navbar/>
    <Myself/>
    <AboutMe/>
    </div>
  );
}

export default App;
