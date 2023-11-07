import React from 'react';
//import './Cards.css';
//import CardItem from './CardItem';
import Navbar from '../components/Navbar';

function Clients() {
  return (
    <>
    <Navbar/>
    <div className='cards_client' >
      <h1 >Clients we work with</h1>
        
          <ul className='cards__items'>
          <img
              src='images/shrad.jpg' widht={150} height={180} alt='shrad '
            />
             <img
              src='images/hritik.jpg' widht={150} height={180} alt='Hritik'
            />
            <img
              src='images/sachin.jpg' widht={150} height={180} alt='sachin '
            />
            <img
              src='images/concert.jpg' widht={150} height={180} alt='concert '
            />
            <img
              src='images/red.jpg' widht={150} height={180} alt='red '
            />

            </ul>
            <ul className='cards__items'>

             <img
              src='images/wom.jpg' widht={150} height={200} alt='Diversity '
            />
            <img
              src='images/hey.jpg' widht={150} height={200} alt='concert '
            />
            <img
              src='images/weird.jpg' widht={150} height={200} alt='hritik '
            />
            <img
              src='images/model.jpg' widht={150} height={200} alt='model '
            />
            <img
              src='images/eventr.jpg' widht={150} height={200} alt='hritik '
            />
          </ul>
          
        </div>
      
    
    </>
  );
}

export default Clients;