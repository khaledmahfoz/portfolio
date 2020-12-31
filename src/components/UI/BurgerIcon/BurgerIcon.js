import React from 'react';

import classes from './BurgerIcon.module.scss';

const BurgerIcon = () => {
   return (
      <div className={classes.nav_icon}>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
      </div>
   );
}

export default BurgerIcon;