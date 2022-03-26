import './App.css';

import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
// import Contact from './components/Contact';

import Navbar from './components/Navbar';

import Error from './components/Error';

import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <main>
            <Routes>
          <Route path="/" element={<Home/>} exact />

          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>}/>
          {/* <Route path="/contact" element={<Contact/>} /> */}

          <Route  component={Error}  />
          

            </Routes>
      </main>
      <footer id="footer__main">
        <div id="footer__content" className='flex__row__center'>
          <div id="footer__title">HIRE ME  :)</div>
          <button className='button' onClick={()=>window.location.href = 'https://www.linkedin.com/in/erharshmalhotra/'}>LinkedIn</button>
          <button className='button' onClick={()=>window.location.href = 'https://github.com/Harsh246'}>Github</button>


        </div>
      </footer>
    </div>
  );
}

export default App;
