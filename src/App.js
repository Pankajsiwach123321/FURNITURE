import logo from './logo.svg';
import './App.css';
import SliderBar from './components/SliderBar';
import Header from './components/Header';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Shop from './components/pages/Shop';
import { Route, Routes } from 'react-router-dom';
import Loader from './components/Loader';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from 'react';
import Backtop from './components/Backtop';
document.body.classList.add("overflow-hidden")
function App() {
  const [preloder, setpreloder] = useState(true)
  setTimeout(() => {
    setpreloder(false)
    document.body.classList.remove("overflow-hidden")

  }, 2000);
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);
  return (
    <div className="App">
      {preloder ? (<div> <Loader /></div>) : (<div><Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/shop' element={<Shop />} />
      </Routes></div>)}
      <Backtop />
    </div>
  );
}

export default App;
