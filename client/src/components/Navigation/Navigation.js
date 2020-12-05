import React from 'react'

import classes from './Navigation.module.scss'

import Logo from '../../images/Logo.svg';

import Link from '../Link/Link';
import Container from '../UI/Container/Container';

const navigation = () => {
   return (
      <nav className={classes.navigation}>
         <Container>
            <div className={classes.linksContainer}>
               <div>
                  <Link to="/">
                     <img style={{height: '30px'}} src={Logo} alt="logo" />
                  </Link>
               </div>
               <div className={classes.stackedIcon}>Icon</div>
               <ul className={classes.navList}>
                  <Link destiny="/about-me">About Me</Link>
                  <Link destiny="/portfolio">Portfolio</Link>
                  <Link destiny="/contact-me">Contact</Link>
               </ul>
            </div>
         </Container>
      </nav>
   )
}

export default navigation