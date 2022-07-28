import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

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
`;

export const ADD_AUCTIONITEM = gql`
  mutation addauctionItem($name:String!, $images:string!, $closingDate:Integer!, $price:Integer,$highestBidder: User!){
    addauctionItem(name:$name,images:$images,closingDate:$closingDate,price:$price,highestBidder:$highestBidder){
      name
      images
      closingDate
      price
      highestBidder
    }
  }
`;
