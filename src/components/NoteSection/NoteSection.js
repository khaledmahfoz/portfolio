import React from 'react';

import classes from './NoteSection.module.scss';

const NoteSection = props => {
   return (
      <div className={classes.NoteSection}>
         {props.children}
      </div>
   );
}

export default NoteSection;