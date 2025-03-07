import styles from './App.module.css';
import { Navbar } from './components/Navbar/Navbar';
import { Myself } from './components/Myself/Myself';

function App() {
  
  return (<div className={styles.App}>
    <Navbar/>
    <Myself/>
    </div>
  );
}

export default App;
