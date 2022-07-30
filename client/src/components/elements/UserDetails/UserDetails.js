import React from 'react'
import { Box, TextField, Paper } from '@mui/material/';
const UserDetails = () => {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="FirstName" label="FirstName" variant="filled" /><br />
      <TextField id="LastName" label="LastName" variant="filled" /><br />
      <TextField id="Address" label="Address" variant="filled" /><br />
      <TextField id="City" label="City" variant="filled" /><br />
      <TextField id="StateProv" label="State / Province" variant="filled" /><br />
      <TextField id="ZipPostal" label="Zip / Postal" variant="filled" /><br />
      <TextField id="PhoneNumber" label="Phone" variant="filled" /><br />
      <TextField id="Email" label="Email" variant="filled" />
    </Box>
  )
}

export default UserDetails