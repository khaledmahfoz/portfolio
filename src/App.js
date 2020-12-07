import React from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.scss'

import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Project from './containers/Project/Project';
import Contact from './containers/Contact/Contact';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Layout>
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
      </Layout>
    </div>
  );
}

export default App;
