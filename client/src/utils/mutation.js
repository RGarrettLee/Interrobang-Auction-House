import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation adduser($name: String!, $email: String!, $password: String!, $address:string!){
    adduser(name: $name, email: $email, password:$password, address:$address) {
      _id
      name
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

export const UPDATE_USER = gql`
  mutation updateUser($FirstName:String!, $LastName:String!, $Email:String!, $Password:String!, $Address:String!, $City:String, $Province:String, $ZipCode:String, $Phone:Int){
    updateUser(FirstName:$FirstName,LastName:$LastName,Email:$Email,Password:$Password,Address:$Address,City:$City,ZipCode:$ZipCode,Phone:$Phone){
      FirstName
      LastName
      Email
      Password
      Address
      City
      ZipCode
      Phone
    }
  }
`
