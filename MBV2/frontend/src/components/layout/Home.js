import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';
import Slider from '../utils/Slider';
import { connect } from 'react-redux';
import { getLatestPosts } from '../../actions/getLatestPostsAction';
import { getPost } from '../../actions/getPostAction'

//import lodash https://lodash.com/docs/4.17.10
const _ = require('lodash');

const styles = theme => ({
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

class Home extends React.Component {
  state = {
    posts: [],
  }

  getPostClick = (id) => {
    this.props.getPost(id);
  }

  componentDidMount() {
    this.props.getLatestPosts();
  }

  componentWillReceiveProps(nextProps) {
    try {
      if (!_.isEqual(nextProps.posts, this.props.posts)) {
        this.setState({
          posts: nextProps.posts
        })
      }

    } catch (e) {
      console.error(e)
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Slider />
        <section className={classes.section}>
          <h1>Welcome To My World</h1>
          <Grid container spacing={16} >
            <Grid item xs={12} sm={12} md={8} lg={8} >
              {
                this.state.posts.map(p => {
                  return <LeftColumn getPostClick={this.getPostClick} post={p} key={p.id} />
                })
              }
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
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  posts: state.latestPostsReducers.posts,
  post: state.postReducers.post
})


export default connect(mapStateToProps, { getLatestPosts, getPost })(withStyles(styles)(Home))
