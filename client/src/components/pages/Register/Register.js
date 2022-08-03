import React,{useState} from 'react'
import { useMutation } from '@apollo/client';
import { Box, Typography, Button, TextField } from '@mui/material';
import { ADD_USER } from '../../../utils/mutation';
import Auth from '../../../utils/auth';

const Register = (e) => {
    const[formState, setFormState] = useState({
        firstname:'',
        lastname:'',
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
        console.log(formState);

        try{
            const {data} = await addUser({
            variables:{...formState},
            });

            Auth.login(data.addUser.token);
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
            placeholder="first name"
            name="firstname"
            type="text"
            value={formState.firstname}
            onChange={handleChange}
          />
          <input
            className="form-input"
            placeholder="lastname"
            name="lastname"
            type="text"
            value={formState.lastname}
            onChange={handleChange}
          />
          <input
            className="form-input"
            placeholder="Your email"
            name="email"
            type="email"
            value={formState.email}
            onChange={handleChange}
          />
          <input
            className="form-input"
            placeholder="******"
            name="password"
            type="password"
            value={formState.password}
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
        </div>
      )}
    </div>
);
}

export default Register;