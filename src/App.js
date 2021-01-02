import React, {lazy, Suspense} from 'react';
import {Route, Switch, useLocation} from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

import './App.scss';

import stars from './images/stars.svg';

import Layout from './components/Layout/Layout';
import LazyLoad from './containers/Lazy/Lazy';
import ErrorBoundry from './containers/ErrorBoundry/ErrorBoundry';
const Home = lazy(() => import('./components/Home/Home'));
const About = lazy(() => import('./components/About/About'));
const Portfolio = lazy(() => import('./components/Portfolio/Portfolio'));
const Project = lazy(() => import('./containers/Project/Project'));
const Contact = lazy(() => import('./containers/Contact/Contact'));
const NotFound = lazy(() => import('./components/NotFound/NotFound'));


function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Layout>
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            classNames="page"
            timeout={300}
          >
            <div className="page" style={{backgroundImage: `url(${stars})`}}>
              <ErrorBoundry>

                <Suspense fallback={<LazyLoad />}>
                  <Switch location={location}>
                    <Route path="/" exact>
                      <Home />
                    </Route>
                    <Route exact path="/about-me">
                      <About />
                    </Route>
                    <Route exact path="/portfolio">
                      <Portfolio />
                    </Route>
                    <Route path="/portfolio/:id">
                      <Project />
                    </Route>
                    <Route exact path="/contact-me">
                      <Contact />
                    </Route>
                    <Route>
                      <NotFound />
                    </Route>
                  </Switch>
                </Suspense>
              </ErrorBoundry>
            </div>
          </CSSTransition>
        </TransitionGroup>

      </Layout>


      {/* <Layout>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about-me">
            <About />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/portfolio/:id">
            <Project />
          </Route>
          <Route path="/contact-me">
            <Contact />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Layout> */}
    </div>
  );
}

export default App;
