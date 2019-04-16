import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  img: {
    height: '200px',
    objectFit: 'cover'
  }
};

function Slider(props) {

  const { classes } = props;
  return (
    <Carousel autoPlay showThumbs={false} centerMode={false} showStatus={false}>
      <div>
        <img className={classes.img} src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" />
      </div>
      <div>
        <img className={classes.img} src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" />
      </div>
      <div>
        <img className={classes.img} src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" />
      </div>
      <div>
        <img className={classes.img} src="http://lorempixel.com/output/cats-q-c-640-480-4.jpg" />
      </div>
    </Carousel>
  )
}

Slider.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Slider);