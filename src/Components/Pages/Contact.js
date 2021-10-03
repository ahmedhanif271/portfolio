import React from 'react';
import { Button1, Button2 } from '../Button';
import '../../App.css';
import '../Projects.css';
import '../HeroSection.css';
import '../Constants/Routes';
import SocialFollow from '../SocialFollow';



function Contact() {
  return (
    <div className='contact-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h1 class='one'>
        For Business purposes: 
        </h1>

        <SocialFollow />

      <p>ALL RIGHTS RESERVED </p>
      
    </div>
  );
}


export default Contact;
