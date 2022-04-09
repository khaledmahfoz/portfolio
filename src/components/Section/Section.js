import React from 'react';

import classes from './Section.module.scss';
import Container from '../UI/Container/Container';

const Section = props => {
   return (
      <div className={classes.Section}>
         <Container>
            {props.children}
         </Container>
      </div>
   );
}

export default Section;