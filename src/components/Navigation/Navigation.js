import React, {useState} from 'react'

import classes from './Navigation.module.scss'

import Logo from '../../images/Logo.svg';

import Link from '../Link/Link';
import Container from '../UI/Container/Container';
import BurgerIcon from '../UI/BurgerIcon/BurgerIcon';
import SideNav from '../SideNav/SideNav';

const Navigation = () => {
   const [iconState, changeIconState] = useState(false);

   const toggleIcon = () => {
      changeIconState(prevState => !prevState);
   }

   return (
      <nav className={classes.navigation}>
         <Container>
            <div className={classes.linksContainer}>
               <div>
                  <Link to="/">
                     <img style={{height: '30px', width: '30px'}} src={Logo} alt="logo" />
                  </Link>
               </div>
               <div className={classes.stackedIcon} onClick={toggleIcon}>
                  <BurgerIcon />
               </div>
               <ul className={classes.navList}>
                  <li>
                     <Link destiny="/about-me" exact>About Me</Link>
                  </li>
                  <li>
                     <Link destiny="/portfolio" exact>Portfolio</Link>
                  </li>
                  <li>
                     <Link destiny="/contact-me" exact>Contact</Link>
                  </li>
               </ul>
               <SideNav isOpen={iconState} toggleIcon={toggleIcon} />
            </div>
         </Container>
      </nav>
   )
}

export default Navigation;