import { gql } from '@apollo/client';

export const QUERY_AUCTION_ITEMS = gql`
    query allAuctionItems {
        allAuctionItems {
            name
            description
            images
            origin
            closingDate
            price
            lot
        }
    }
`;

export const QUERY_SINGLE_AUCTION_ITEM = gql`
    query singleAuctionItem($name: String!) {
        oneAuctionItem(name: $name) {
            name
            description
            images
            origin
            closingDate
            price
            lot
        }
    }
`;