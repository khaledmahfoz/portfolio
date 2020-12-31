import React from 'react';
import {Link} from 'react-router-dom';

import classes from './NotFound.module.scss';

const notFound = () => {
   return (
      <div>
         <div className={classes.NotFound}>
            <div className={classes.status}>404</div>
            <p>Something went wrong! (as usual)</p>
            <Link to="/">Get me out of here</Link>
         </div>
      </div>
   );
}

export default notFound