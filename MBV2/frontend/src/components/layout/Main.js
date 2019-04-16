import React, { Component } from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';
import Slider from '../utils/Slider';

const useStyles = makeStyles({
  section: {
    textAlign: 'center',
    maxWidth: '1100px',
    paddingTop: '50px',
    paddingBottom: '50px',
    margin: 'auto'
  },
  img: {
    height: '200px',
  }
});

function Main() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Slider />
      <section className={classes.section}>
        <h1>Welcome To My World</h1>
        <Grid container spacing={16} >
          <Grid item xs={12} sm={12} md={8} lg={8} >
            <LeftColumn />
            <LeftColumn />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} >
            <RightColumn />
            <RightColumn />
          </Grid>
        </Grid>
      </section>
    </React.Fragment>
  )
}

export default Main
