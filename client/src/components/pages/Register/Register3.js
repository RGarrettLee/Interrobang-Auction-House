import React,{useState} from 'react'
import { useMutation } from '@apollo/client';
import { Box, Typography, Button, TextField } from '@mui/material';
import { ADD_USER } from '../../../utils/mutation';
import Auth from '../../../utils/auth';

const Register = (e) => {
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


return(
    <div >
    {/* {data ? (
        <p>
          Success! You may now head{' '}
          <Link to="/">back to the homepage.</Link>
        </p>
      ) : ( */}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
        <form onSubmit={handleFormSubmit}>
          <input
            className="form-input"
            placeholder="Your email"
            name="email"
            type="email"
            onChange={handleChange}
          />
          <input
            className="form-input"
            placeholder="******"
            name="password"
            type="password"
            onChange={handleChange}
          />
          <button
            className="btn btn-block btn-primary"
            style={{ cursor: 'pointer' }}
            type="submit"
          >
            Submit
          </button>
        </form>
      

      {error && (
        <div className="my-3 p-3 bg-danger text-white">
          {error.message}
          {console.log(JSON.stringify(error, null, 2))}
        </div>
      )}
    </div>
);
}

export default Register;