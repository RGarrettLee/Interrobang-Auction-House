import { gql } from '@apollo/client';

export const QUERY_AUCTION_ITEMS = gql`
    query GetAuctionItems {
        allAuctionItems {
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
            currentBidValue
            closingDate
            lot
        }
    }
`

export const QUERY_AUCTION_ITEM = gql`
    query GetAuctionItem($name: String!) {
        oneAuctionItem(name: $name) {
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
            currentBidValue
            closingDate
            lot
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