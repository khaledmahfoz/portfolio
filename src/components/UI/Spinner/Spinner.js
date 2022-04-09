import React from 'react';

import classes from './Spinner.module.scss';

const Spinner = () => {
   return (
      <div className={classes.spinner}>
         <div className={classes.dot1}></div>
         <div className={classes.dot2}></div>
      </div>
   );
}

export default Spinner;