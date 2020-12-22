import React from 'react';
import {Route, Switch, useLocation} from 'react-router-dom';

import './App.scss'

import stars from './images/stars.svg';

import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Project from './containers/Project/Project';
import Contact from './containers/Contact/Contact';
import NotFound from './components/NotFound/NotFound';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

const routes = [
  {path: '/', name: 'Home', Component: Home},
  {path: '/about-me', name: 'About', Component: About},
  {path: '/portfolio', name: 'Portfolio', Component: Portfolio},
  {path: '/protfolio/:id', name: 'Project', Component: Project},
  {path: '/contact-me', name: 'Contact', Component: Contact},
  {name: 'Notfound', Component: NotFound},
]

function App() {
  const location = useLocation();
  console.log(location)
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

              <Switch location={location}>
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
            </div>
          </CSSTransition>
        </TransitionGroup>

      </Layout>

      {/* <Layout>
        {routes.map(({path, name, Component}) => (
          <Route key={name} exact path={path}>
            {({match}) => (
              <CSSTransition
              in={match != null}
              timeout={300}
              classNames="page"
              unmountOnExit
              >
                <div className="page" style={{backgroundImage: `url(${stars})`}}>

                  <Component />

                </div>

              </CSSTransition>
            )}
          </Route>
        ))}
      </Layout> */}

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
