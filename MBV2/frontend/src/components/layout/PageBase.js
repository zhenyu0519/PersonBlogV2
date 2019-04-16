import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Grid from '@material-ui/core/Grid';
import { CssBaseline } from '@material-ui/core';


function PageBase() {
  return (
    <React.Fragment>
      <CssBaseline />
      <header>
        <Header />
      </header>
      <main>
        <Main />
      </main>
      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  )
}

export default PageBase;
