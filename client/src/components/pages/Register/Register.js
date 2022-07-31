import React from 'react'
import { Box, Typography, Button, TextField } from '@mui/material';
const Register = () => {
    return (
        <Box className="form" sx={{ marginTop: '80px', padding:'10px', textAlign: "center", flexGrow: 1 }}>
            <Typography fontFamily="Kanit" variant="h3" >Register</Typography><br />
            <TextField id="FirstName" label="FirstName" variant="filled" /><br /><br />
            <TextField id="LastName" label="LastName" variant="filled" /><br /><br />
            <TextField id="Email" label="Email" variant="filled" /><br /><br />
            <TextField id="password" label="Password" variant="filled" /><br /><br />
            <TextField id="confirmPassword" label="Confirm Password" variant="filled" />
            <br /><br />
            <Button variant="contained" type="submit" color="secondary">Register</Button>
        </Box>
    )
}

export default Register