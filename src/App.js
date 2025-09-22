import { Navbar } from './components/Navbar';
import './App.css';
import Home from './components/Home';
import Guide from './components/Guide';
import Services from './components/Services';

function App() {
  return (
   <>
   <Navbar/>
   <Home/>
   <Services/>
   <Guide/>
   </>
  );
}

export default App;
