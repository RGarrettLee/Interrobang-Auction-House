import React from 'react'
import { Box, Typography, Button, TextField } from '@mui/material';
const Register = () => {
    return (
        <Box className="form" sx={{ marginTop: '80px', padding:'10px', textAlign: "center", flexGrow: 1 }}>
            <Typography fontFamily="Kanit" variant="h3" >Register</Typography><br />
            <TextField margin="dense" id="FirstName" label="First Name" variant="filled" /><br />
            <TextField margin="dense" id="LastName" label="Last Name" variant="filled" /><br />
            <TextField margin="dense" id="Email" label="Email" variant="filled" /><br />
            <TextField margin="dense" id="password" label="Password" variant="filled" /><br />
            <TextField margin="dense" id="confirmPassword" label="Confirm Password" variant="filled" />
            <br /><br />
            <Button variant="contained" type="submit" color="secondary">Register</Button>
        </Box>
    )
}

export default Register