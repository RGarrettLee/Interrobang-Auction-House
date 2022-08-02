import React from 'react'
import './NotFound.css'
import { Box, Paper, Grid, styled, Typography } from '@mui/material';
export  const NotFound = () => {
  return (
    <Box sx={{ marginTop: '80px', textAlign: "center", flexGrow: 1 }}>
      <Typography fontFamily="Montserrat Alternates" variant="h1" >Error 404</Typography>
      <Typography fontFamily="Roboto" variant="h5" >The page you are looking for was sold at auction.</Typography>
      <img src={require('../../images/gavel.png')} width='300' />
    </Box>
  )
}
export default NotFound