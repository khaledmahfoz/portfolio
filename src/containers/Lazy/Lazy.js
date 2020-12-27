import React from 'react';

import classes from './Lazy.module.scss';

import Spinner from '../../components/UI/Spinner/Spinner';

const LazyLoad = () => {
   return (
      <div className={classes.Lazy}>
         <Spinner />
      </div>
   );
};

export default LazyLoad;