import React from 'react';
import { Button } from '../Button';
import '../../App.css';
import '../Projects.css';



function Projects() {
  return (
    <div className='projects-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h1 class='one'>
        These are the list of the Projects 
        </h1>

        <h2 class='two'>
          AUTOMOTIVE SOFTWARE ENGINEERING 
        </h2>
        <h2 class='two'>
          SENSOR TESTING          
        </h2>
        <h2 class='two'>
          AUTONOMOUS DRIVING
          
        </h2>

      <p>Product and Website designer </p>
      <div className='projects-btns'>
        <Button
          className='btns' 
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          About
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Contact <i className='far fa-phone' aria-hidden="true"></i> 
        </Button>
      </div>
    </div>
  );
}


export default Projects;
