import logo from './logo.svg';
import './App.css';
import {Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Menu from './Components/Menu';
import Gallary from './Components/Galary';
import Navbar from './Components/Navbar';
// import Baner from './Components/Baner';

function App() {
  return (
    <div className="App">
      {/* <Baner/> */}
      
   <Navbar/>
      <Routes>
     

      <Route path='/'element={<Home/>} />
      <Route path='/about'element={<About/>} />
      <Route path='/menu'element={<Menu/>} />
      <Route path='/gallary'element={<Gallary/>} />
 
      </Routes>
    

    </div>
  );
}

export default App;
