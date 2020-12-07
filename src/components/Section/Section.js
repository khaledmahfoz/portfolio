import React from 'react';

import classes from './Section.module.scss';
import Container from '../UI/Container/Container';

const Section = props => {
   return (
      <div className={classes.Section}>
         <Container>
            {props.children}

            {/* <div className={classes.wrapper}>
         </div> */}
         </Container>
      </div>
   );
}

export default Section;