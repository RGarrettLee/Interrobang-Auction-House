import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation adduser($name: String!, $email: String!, $password: String!, $address:string!){
    adduser(name: $name, email: $email, password:$password, address:$address) {
      _id
      named
      email
      password
      address
      }
    }
  }
`;
