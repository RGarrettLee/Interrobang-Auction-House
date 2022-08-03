import React,{useState} from 'react'
import { useMutation } from '@apollo/client';
import { Box, Typography, Button, TextField } from '@mui/material';
import { ADD_USER } from '../../../utils/mutation';
import auth from '../../../utils/auth';

function Register() {

    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');

    const handleInputChange = (e) =>{
        const {target} = e;
        const inputType = target.name;
        const inputValue = target.value;

    };

    const handleregisterSubmit = (e) =>{

        e.preventDefault();

    };
    return (
        <Box className="form" sx={{ marginTop: '80px', padding:'10px', textAlign: "center", flexGrow: 1 }}>
            <Typography fontFamily="Montserrat Alternates" variant="h3" >Register</Typography><br />
            <TextField margin="dense" id="FirstName" label="First Name" name="firstname" type="firstname" variant="filled" onChange={handleInputChange} placeholder="First Name"/><br />
            <TextField margin="dense" id="LastName" label="Last Name" variant="filled" value={lastname} onChange={handleInputChange}/><br />
            <TextField margin="dense" id="Email" label="Email" variant="filled" value={email} onChange={handleInputChange}/><br />
            <TextField margin="dense" id="password" label="Password" variant="filled" value={password} onChange={handleInputChange}/><br />
            <TextField margin="dense" id="confirmPassword" label="Confirm Password" variant="filled" value={confirmpassword} onChange={handleInputChange}/>
            <br /><br />
            <Button variant="contained" type="submit" color="secondary" onClick={handleregisterSubmit}>Register</Button>
        </Box>
    )
}


export default Register