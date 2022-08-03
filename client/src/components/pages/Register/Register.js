import React,{useState} from 'react'
import { useMutation } from '@apollo/client';
import { Box, Typography, Button, TextField } from '@mui/material';
import { ADD_USER } from '../../../utils/mutation';
import Auth from '../../../utils/auth';

function Register() {

    const[formState, setFormState] = useState({
        email:'',
        password:'',
    });
    const [addUser, {error, data}] = useMutation(ADD_USER);

    const handleChange = (event) =>{
        const{name, value} = event.target;

        setFormState({
            ...formState,
            [name]:value,
        });
    };

    const handleFormSubmit = async (event) =>{
        event.preventDefault();

        try{
            console.log('something');
            console.log(formState);
            const {data} = await addUser({
              variables: {...formState},
            });

            Auth.login(data.login.token);
        } catch(e){
            console.log(e);
        }
    };

    return (
        <Box className="form" sx={{ marginTop: '80px', padding:'10px', textAlign: "center", flexGrow: 1 }}>
            <Typography fontFamily="Montserrat Alternates" variant="h3" >Register</Typography><br />
            <TextField margin="dense" id="Email" label="Email" variant="filled" onChange={handleChange}/><br />
            <TextField margin="dense" id="password" label="Password" variant="filled" onChange={handleChange}/><br />
            <br /><br />
            <Button variant="contained" type="submit" color="secondary" onSubmit={handleFormSubmit}>Register</Button>
        </Box>
    )
}


export default Register;