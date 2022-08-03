import {
  gql
} from '@apollo/client';

export const LOGIN_USER = gql `
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        Email
      }
    }
  }
`;

export const ADD_USER = gql `
  mutation AddUser($email: String!, $password: String!) {
    addUser(Email: $email, Password: $password) {
      user {
        Email
        Password
      }
    }
  }
`;

export const ADD_AUCTIONITEM = gql `
  mutation AddAuctionItem($name: String!, $images: String!, $itemDescription: String!, $artistName: String!, $origin: String!, $artistInfo: String, $dateProduced: String, $size: String, $artMedium: String, $valuation: Int, $openingBid: Int, $closingDate: String, $lot: Int) {
      addAuctionItem(name: $name, images: $images, itemDescription: $itemDescription, artistName: $artistName, origin: $origin, artistInfo: $artistInfo, dateProduced: $dateProduced, size: $size, artMedium: $artMedium, valuation: $valuation, openingBid: $openingBid, closingDate: $closingDate, lot: $lot) {
        name
        images
        itemDescription
        artistName
        origin
        artistInfo
        dateProduced
        size
        artMedium
        valuation
        openingBid
        lot
        closingDate
      }
  }
`;

export const UPDATE_USER = gql `
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