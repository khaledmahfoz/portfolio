import React from 'react';

import classes from './BurgerIcon.module.scss';

const BurgerIcon = props => {
   return (
      <div className={`${classes.nav_icon} ${props.isOpen ? classes.open : ''}`}>
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