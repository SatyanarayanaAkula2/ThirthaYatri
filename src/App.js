import { Navbar } from './components/Navbar';
import './App.css';
import Home from './components/Home';
import Guide from './components/Guide';
import Services from './components/Services';
import { Faqs } from './components/faqs';
import About from './components/about';

function App() {
  return (
   <>
   <Navbar/>
   <Home/>
   <Services/>
   <Guide/>
   <Faqs/>
   <About/>
   </>
  );
}

export default App;
