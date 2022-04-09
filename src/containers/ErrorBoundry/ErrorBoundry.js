import React from 'react';
import NotFound from '../../components/NotFound/NotFound';

class ErrorBoundry extends React.Component {
   state = {
      err: false
   }

   static getDerivedStateFromError() {
      return {err: true};
   }

   render() {
      return this.state.err ? <NotFound /> : this.props.children;
   }

}

export default ErrorBoundry;