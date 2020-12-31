import React, {useState} from 'react';
import {useHistory, useLocation} from 'react-router-dom';

import classes from './SideNav.module.scss';
import Backdrop from '../UI/Backdrop/Backdrop';

const SideNav = props => {
   const location = useLocation();

   const [pathState, changePathState] = useState(location.pathname);

   const history = useHistory();

   const navigateHandler = (path) => {
      changePathState(path);
      props.toggleIcon();
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
         <Backdrop />
         <div className={classes.SideNav}>
            <div className={classes.CloseIconDiv}>
               <div>X</div>
            </div>
            <ul>
               {routes.map(route => {
                  return (
                     <li
                        key={route.id}
                        onClick={navigateHandler.bind(this, route.path)}
                     >
                        <a
                           className={pathState === route.path ? classes.ActiveLink : ''}
                        >
                           {route.name}
                        </a>
                     </li>
                  );
               })}
            </ul>
         </div>
      </>
   );
}

export default SideNav;