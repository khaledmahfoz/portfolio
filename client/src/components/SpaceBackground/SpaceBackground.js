import React, {useRef, useEffect} from 'react';

import classes from './SpaceBackground.module.scss';
import variables from '../../App.scss';

const SpaceBackground = (props) => {
   const canvasRef = useRef();

   console.log(props.content)

   useEffect(() => {
      const setDim = () => {
         const navHeight = variables.navHeight.split('px')[0];
         canvasRef.current.width = window.innerWidth;
         canvasRef.current.height = document.querySelector('#content').height - navHeight;
         // canvasRef.current.minHeight = window.innerHeight;

         const context = canvasRef.current.getContext('2d');
         context.beginPath();
         const Radius = 1;
         const PI = Math.PI
         for (let i = 0; i < 30; i++) {
            // let centerX = Math.random() * window.innerWidth;
            // let centerY = Math.random() * window.innerHeight;
            let centerX = Math.random() * window.innerWidth;
            let centerY = Math.random() * document.querySelector('#content').height;
            context.arc(centerX, centerY, Radius, 0, 2 * PI, false);
            context.closePath();
            context.fillStyle = '#C4C4C4';
            context.fill();
         }
      }
      setDim();
      window.addEventListener('resize', setDim);
      return () => {
         window.removeEventListener('resize', setDim)
      };
   }, [props.contentRef.height])

   return (
      <canvas ref={canvasRef} className={classes.SpaceBackground}></canvas>
   );
}

export default SpaceBackground;