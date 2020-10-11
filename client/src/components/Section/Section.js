import React from 'react';

import classes from './Section.module.scss';

const Section = props => {
   return (
      <div className={classes.Section}>
         <div className={classes.wrapper}>
            {props.children}
         </div>
      </div>
   );
}

export default Section;