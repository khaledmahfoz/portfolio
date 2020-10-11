import React from 'react';
import {Link} from 'react-router-dom';

import classes from './Home.module.scss';

import Container from '../UI/Container/Container';
import SolarSystem from '../SolarSystem/SolarSystem';

const home = () => {
   return (
      <Container>
         <div className={classes.Home}>
            <div className={classes.Info}>
               <h1>HI, I’m <span>Khaled Mahfoz</span></h1>
               <h3>i’m a Full-stack developer</h3>
               <p>
                  Building web applications with the latest techs.
                  like React, nodejs and Mongodb
               </p>
               <Link to="/portfolio">
                  My portfolio
               </Link>
               {/* <Button isEnabled={true} styles={classes.Button}>
                  My portfolio
               </Button> */}
            </div>
            <SolarSystem />
         </div>
      </Container>
   )
}

export default home