import React, { useState } from 'react';
//import './style.css';

// Here we import a helper function that will check if the email is valid
import Auth from '../../../utils/auth';
import { LOGIN_USER } from '../../../utils/mutation';

import { useMutation } from '@apollo/client';

import { Box, Paper, Grid, styled, Typography, Button, TextField } from '@mui/material';

function Login() {
    // Create state variables for the fields in the login
    // We are also setting their initial values to an empty string
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const [loginUser, { error, data }] = useMutation(LOGIN_USER);

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        // Based on the input type, we set the state of either email, username, and password
        if (inputType === 'email') {
            setEmail(inputValue);
        } else {
            setPassword(inputValue);
        }
    };

    const handleloginSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data } = await loginUser({
                variables: { email, password }
            })

            console.log(data);

            Auth.login(data.login.token);
            alert('Logged in!'); // replace with toaster popup
            setPassword('');
            setEmail('');
        } catch (error) {
            console.error(error);
            alert('Failed to log in!'); // replace with toaster pop
        }

        // If everything goes according to plan, we want to clear out the input after a successful registration.
    };

    return (
        <Box sx={{ marginTop: '80px', padding: '10px', textAlign: "center", flexGrow: 1 }}>
            <Typography fontFamily="Montserrat Alternates" variant="h3" >Login</Typography><br />
            <login className="login">
                <TextField
                    variant="filled"
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="Email"
                /><br /><br />
                <TextField
                    variant="filled"
                    value={password}
                    name="password"
                    onChange={handleInputChange}
                    type="password"
                    placeholder="Password"
                /><br /><br />
                <Button variant="contained" color="secondary" type="button" onClick={handleloginSubmit}>Submit</Button>
            </login>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </Box>
    );
}

export default Login;
