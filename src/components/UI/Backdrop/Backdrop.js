import React from 'react';

import classes from './Backdrop.module.scss';

const Backdrop = props => {
   return (
      props.isOpen ? <div className={classes.Backdrop} onClick={props.toggleIcon}></div> : null
   );
};

export default Backdrop;