import React from 'react';

import classes from './CloseIcon.module.scss';

const CloseIcon = props => {
   return (
      <button className={`${classes.nav_icon} ${classes.close_icon}`} onClick={props.toggleIcon}>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
      </button>
   );
}

export default CloseIcon;