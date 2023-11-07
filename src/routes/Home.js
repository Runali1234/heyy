import React from 'react';
//import '../../App.css';
import Cards from '../components/Cards';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar'
//import Footer from '../Footer';

function Home() {
  return (
    <>
    <Navbar/>
    <Hero
      cname="hero"
      title="We exist because we want to help you navigate
      and harness the potential of this ever-changing
     digital landscape."

     your="Your 
     growth 
     partners"
     
     text="It's not a game of guesses, it's a game of numbers where growth is the
       ultimate goal. We leverage cutting-edge technology and data-driven insights
       to help you answer questions that unlock growth."
       />
    </>
  );
}

export default Home;