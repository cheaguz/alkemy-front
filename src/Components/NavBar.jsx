import React from 'react';
import {AppBar , Box , Toolbar , Typography , Button } from '@mui/material'


export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Home
          </Typography>
          <Button color="inherit">LogOut</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}