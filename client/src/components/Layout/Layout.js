import React from 'react';

import classes from './Layout.module.scss'

import Navigation from '../Navigation/Navigation';
import SpaceBackground from '../SpaceBackground/SpaceBackground';

const layout = props => {
   return (
      <>
         <Navigation />
         <main className={classes.main}>
            <SpaceBackground />
            {props.children}
         </main>
      </>
   );
}

export default layout;