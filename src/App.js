import logo from './logo.svg';
import './App.css';
import Nav from './component/nav/Nav';
import Routerdom from './component/Ruterdom/Routerdom';
import Mega_menu from './component/pages/Shop/megamenu/Mega_menu';

function App() {
  
  return (
   <>
   <h1>hamed</h1>
   <header className=''>
    <Nav/>
   </header>
   
   <body>
    { <Routerdom/> }
    
   </body>
   <footer>

   </footer>
   
   </>
  );
}

export default App;
