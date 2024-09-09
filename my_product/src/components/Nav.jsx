import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
      <Toolbar>
                      <IconButton size="large"
                      edge="start"
                      variant="contained"
                      aria-label="menu"
                          sx={{ mr: 2 }}>
                      </IconButton>
                      <Typography align='left' variant='h5' component="div"  sx={{ flexGrow: 1 }}>My Shop</Typography>
                      <Link to='/'>
                          <Button variant='contained'>Home</Button></Link>&nbsp;
                      <Link to='/add'>
                          <Button variant='contained'>Add Product</Button></Link>&nbsp;
                          </Toolbar>
        </AppBar>
        </Box>
    </div>
  )
}

export default Nav
