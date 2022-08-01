import { gql } from '@apollo/client';

export const QUERY_AUCTION_ITEMS = gql`
    query GetAuctionItems {
        allAuctionItems {
            name
        }
    }
`