import React from 'react';

import classes from './Layout.module.scss'

import stars from '../../images/stars.svg';

import Navigation from '../Navigation/Navigation';
// import SpaceBackground from '../SpaceBackground/SpaceBackground';

const Layout = props => {
   return (
      <>
         <Navigation />
         <main className={classes.main} style={{backgroundImage: `url("${stars}")`}}>
            {/* <SpaceBackground contentRef={contentRef} /> */}
            {props.children}
            {/* <div id="content" ref={contentRef}>
            </div> */}
         </main>
      </>
   );
}

export default Layout;