import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import LeftColumn from './LeftColumn';
import { connect } from 'react-redux';
import { getPosts } from '../../actions/postsAction'

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

class Post extends React.Component {
  state = {
    posts: [],
    path: ''
  }

  componentDidMount() {
    this.props.getPosts();
  }

  componentWillReceiveProps(nextProps) {
    if (!_.isEqual(nextProps.posts, this.props.posts)) {
      this.setState({
        posts: nextProps.posts
      })
    }
  }

  // componentDidUpdate(prevProps) {
  //   console.log('this props is ', this.props)
  //   if (prevProps.match.params.pathParam !== this.props.match.params.pathParam) {
  //     this.props.getPosts();
  //   }
  // }
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <section className={classes.section}>
          <h1>Welcome To My World</h1>
          <Grid container spacing={16} >
            <Grid item xs={12} sm={12} >
              {
                this.state.posts.map(p => {
                  return <LeftColumn post={p} key={p.id} />
                })
              }
            </Grid>
          </Grid>
        </section>
      </React.Fragment>
    )
  }
}

Post.propTypes = {
  classes: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  posts: state.postsReducers.posts
})

export default connect(mapStateToProps, { getPosts })(withStyles(styles)(Post))
