import React from 'react';
import { Button, Typography, Grid } from '@material-ui/core';
import './App.css';
import Navbar from './Navbar';

function App() {
  const handleAdminClick = () => {
    // Redirect to admin page hosted on Netlify
    window.location.href = "https://learning-up-admin.netlify.app/";
  };

  const handleUserClick = () => {
    // Redirect to user page hosted on Netlify
    window.location.href = "https://learning-client.netlify.app/";
  };

  return (<>
    <Navbar />
    <div className="container">
      <Grid container direction="column" alignItems="center" spacing={3}>
        <Grid item>
          <Typography variant="h4" color='Black'>Login Page</Typography>
        </Grid>
        <Grid item className="card">
          <Button variant="contained" color="primary" onClick={handleAdminClick}>
            Enter as Admin
          </Button>
        </Grid>
        <Grid item className="card">
          <Button variant="contained" color="secondary" onClick={handleUserClick}>
            Enter as User
          </Button>
        </Grid>
      </Grid>
    </div>
  </>
  );
  }
export default App;
