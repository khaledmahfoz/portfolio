import React from 'react';

import classes from './SolarSystem.module.scss';

const SolarSystem = () => {
   const arr = [1, 2];
   let content = [];

   arr.map(x => {
      let classVar = `orbit${x}`;
      return content.push(
         <div key={x} className={classes[classVar]}>
            <div className={classes.planet}>
               <span></span>
            </div>
         </div>
      )
   })

   return (
      <div className={classes.SolarSystem}>
         <div className={classes.content}>
            <div className={classes.sun}></div>
            {content}
         </div>
      </div>
   );
}

export default SolarSystem;