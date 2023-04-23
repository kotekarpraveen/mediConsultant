import { useState } from 'react';
import reactLogo from './assets/react.svg';

import 'src/assets/scss/style.scss';
import NavigationScroll from './Components/Layout/NavigationScroll';
import Header from './pages/Header/Header';
import Footer from './pages/Footer/Footer';
import Home from './pages/Home/Home';
import AboutUs from './pages/About/AboutUs';
import Service from './pages/Service/Service';
import Contact from './pages/Contact/Contact';
import Routing from './Routes/Routing';

function App() {
  return (
    <div className="App">
      <NavigationScroll>
        <Header/>
      {/*  <Home/> */}
     {/*  <AboutUs/> */}
    {/*  <Service/> */}
    <Routing/>
        <Footer/>
      </NavigationScroll>
    </div>
  );
}

export default App;
