import React from 'react';
import {NavLink} from 'react-router-dom';

import classes from './Link.module.scss'

const link = props => {
   return (
      <NavLink to={props.destiny} {...props} activeClassName={classes.activeLink}>
         {props.children}
      </NavLink>
   );
}

export default link;