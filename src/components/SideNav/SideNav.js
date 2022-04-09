import React, {useState, useEffect} from 'react';
import {useHistory, useLocation} from 'react-router-dom';

import classes from './SideNav.module.scss';

import stars from '../../images/stars.svg';

import Backdrop from '../UI/Backdrop/Backdrop';
import CloseIcon from '../UI/CloseIcon/CloseIcon';
import Logo from '../UI/Logo/Logo';

const SideNav = props => {
   const location = useLocation();
   useEffect(() => {
      changePathState(location.pathname);
   }, [location.pathname])


   const [pathState, changePathState] = useState(location.pathname);

   const history = useHistory();

   const navigateHandler = (path) => {
      props.toggleIcon();
      // changePathState(path);
      history.push(path);
   };

   const routes = [
      {
         id: 1,
         name: 'Home',
         path: '/',
      },
      {
         id: 2,
         name: 'Portfolio',
         path: '/portfolio',
      },
      {
         id: 3,
         name: 'About',
         path: '/about-me',
      },
      {
         id: 4,
         name: 'Contact',
         path: '/contact-me',
      },
   ]

   return (
      <>
         <Backdrop toggleIcon={props.toggleIcon} isOpen={props.isOpen} />
         <div
            className={`${classes.SideNav} ${!props.isOpen ? classes.closed : ''}`}
            style={{backgroundImage: `url(${stars})`}}>
            <div className={classes.CloseIconDiv}>
               <div><Logo /></div>
               <div>
                  <CloseIcon toggleIcon={props.toggleIcon} />
               </div>
            </div>
            <ul>
               {routes.map(route => {
                  return (
                     <li key={route.id}>
                        <button onClick={navigateHandler.bind(this, route.path)}
                        className={pathState === route.path ? classes.ActiveLink : ''}>
                           {route.name}
                        </button>
                     </li>
                  );
               })}
            </ul>
         </div>
      </>
   );
}

export default SideNav;