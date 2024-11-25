import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Element, scroller } from 'react-scroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import Contact from './components/Contact';
import About from './components/About';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Maintenance from './components/Maintenance';

const App = () => {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 700,
      easing: 'ease-in',
      delay: 100,
      once: true,
      mirror: false,
    });

    scroller.scrollTo('hero', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });

    return () => {
      Aos.refresh();
    };
  }, []);

  return (
    <Router>
      {/*<Navbar />*/}
      <Routes>
        <Route
          path="/"
          element={
            <>
            <Element name="maintenance">
                <Maintenance />
              </Element>

              {/* <Element name="hero">
                <Hero />
              </Element>
              <Element name="about">
                <About />
              </Element>
              <Element name="work">
                <Work />
              </Element>
              <Element name="contact">
                <Contact />
              </Element> */}
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
