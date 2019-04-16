import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
  footer: {
    left: 0,
    bottom: 0,
    width: '100%',
    backgroundColor: '#3f51b5',
    textAlign: 'center'
  },
  text: {
    color: 'white',
  }
});

function Footer() {
  const classes = useStyles();
  // const [value, setValue] = React.useState(0);

  return (
    <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom className={classes.text}>
        Footer
            </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" component="p" className={classes.text}>
        Something here to give the footer a purpose!
            </Typography>
    </footer>

  );
}

export default Footer;