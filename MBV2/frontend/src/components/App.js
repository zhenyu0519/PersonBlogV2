import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import store from '../store';
import Header from './layout/Header';
import Main from './layout/Main';
import Footer from './layout/Footer';
import { CssBaseline } from '@material-ui/core';
import Navbar from './layout/Navbar';
import About from './layout/About';
import Home from './layout/Home'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CssBaseline />
        <Router>
          <Fragment>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route component={Error} />
            </Switch>
          </Fragment>
        </Router>
        {/* <Main />
        <Footer /> */}
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));