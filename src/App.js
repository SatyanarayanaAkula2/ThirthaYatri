import { Navbar } from './components/Navbar';
import './App.css';
import Home from './components/Home';
import Guide from './components/Guide';
import Services from './components/Services';
import { Faqs } from './components/faqs';

function App() {
  return (
   <>
   <Navbar/>
   <Home/>
   <Services/>
   <Guide/>
   <Faqs/>
   </>
  );
}

export default App;
