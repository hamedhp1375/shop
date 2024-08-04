import logo from './logo.svg';
import './App.css';
import Nav from './component/nav/Nav';

import Mega_menu from './pages/Shop/megamenu/Mega_menu';
import { Route, Routes } from 'react-router-dom'
import Home from "../src/pages/home/Home"
import About from '../src/pages/about/About'
import Contact from './pages/Contact/Contact'
import Portfolio from './pages/Portfolio/Portfolio'
import Services from './pages/Services/Services'
import Shop from './pages/Shop/Shop'
function App() {
  
  return (
   <>
   
   <header className=''>
    <Nav/>
   </header>
   
   <body>
   <Routes>
    <Route path="/Home" element={<Home />} />
   <Route path="/About" element={<About />} />
   <Route path="/Contact" element={<Contact />} />
   <Route path="/Portfolio" element={<Portfolio />} />
   <Route path="/Services" element={<Services />} />
   <Route path="/Shop" element={<Shop />} />
   
 </Routes>
    
   </body>
   <footer>

   </footer>
   
   </>
  );
}

export default App;
