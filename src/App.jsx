import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Team from '../components/team';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import '../assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Skills from '../components/Skills';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Skills/>
      <Team />
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
