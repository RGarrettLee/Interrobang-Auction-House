import { gql } from '@apollo/client';

export const QUERY_AUCTION_ITEMS = gql`
    query GetAuctionItems {
        allAuctionItems {
            name
        }
    }
`

export const UPDATE_USER = gql`
    query UpdateUser {
        user {
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