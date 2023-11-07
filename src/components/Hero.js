import "./Hero.css";
//import './Navbar.css';
//import Navbar from './Navbar.js';
function Hero(props) {
  return (
    <>
    <div className={props.cName}>
    <div className="hero-text">
      <p>{props.title}</p>
      <h1>{props.your}</h1>
       <p1>{props.text}</p1>
    </div>
    </div>
    </>
  );
}

export default Hero;