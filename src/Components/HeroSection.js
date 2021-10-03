import React from 'react';
import '../App.css';
import { Button1, Button2} from './Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';
import SocialFollow from './SocialFollow';

function HeroSection() {
  return (
    <div className='hero-container'>
      <img className='onee' src='/images/pfb2.jpg'  />
      <h1 class='one'>
        Hello, I'm AHMED
        </h1>

        <h1 class='two'>
          HANIF
        </h1>

      <p>Product and Website designer </p>
      <div className='hero-btns'>
        <Button1
        className='btns' 
        buttonStyle='btn--outline'
        buttonSize='btn--large'
        onClick="onCLick"
        >
       
        
         
        
        
          
        About
          
        
      
      
       </Button1>

        
        
        
        
        
        <Button2
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Contact <i className='far fa-phone' aria-hidden="true"></i> 
        </Button2>
      </div>
      
  
</div>
    
  );
}

export default HeroSection;