import React from 'react';
//import './Cards.css';
//import CardItem from './CardItem';
import Navbar from '../components/Navbar';

function OurWolves() {
  return (
    <>
    <Navbar/>
    <div className='' >
      <h1 >Keep track of the wolves</h1>
        
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

            </ul>
        </div>
      
    
    </>
  );
}

export default OurWolves;