import React from 'react';
import { Link,useNavigate,useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, makeStyles,Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: 0,
    left: 0,
    right: 0,
    margin: 0,
    padding: 0,
  },
  toolbar: {
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    flexGrow: 1,
    textDecoration: 'none',
    color: 'inherit',
    marginLeft: 60,
    fontSize: '1.5rem',
    letterSpacing: '2px',
    textTransform: 'uppercase',
  },
  
}));



function Navbar() {
  const classes = useStyles();
  
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6"  className={classes.title}>
          LEARNING-UP WEBSITE
        </Typography>
        
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
