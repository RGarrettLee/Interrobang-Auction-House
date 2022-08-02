import React from 'react'

import {Box,Paper,Grid,styled, Button,Typography } from '@mui/material';
import { SwiperParalax, BidControls } from '../../elements/'

// use graphql
import { useQuery } from '@apollo/client';
import { QUERY_AUCTION_ITEMS, QUERY_AUCTION_ITEM } from '../../../utils/queries';

// Get passed in props from link
import { useLocation } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  margin: theme.spacing(2),
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

const ItemDetails = () => {
  let location = useLocation();
  const name = location.state.title;
  const { loading, error, data } = useQuery(QUERY_AUCTION_ITEM, { // make request for single item
    variables: {name} 
  });

  const item = data?.oneAuctionItem || [];
  if (error) console.log(error);
  loading ? console.log('Loading') : console.log(item);

  return (

    <div>
      <div><SwiperParalax title={name} imageUrl={item.images} itemDescription={item.itemDescription} lot={item.lot} size={item.size} artistName={item.artistName} origin={item.origin} artistInfo={item.artistInfo}/></div>
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            <Grid item xs>
              
              <Item>
                <Typography variant="h5"><b>Details</b><hr /></Typography>
                <b>Valuation: {item.valuation}</b> <br /><br />
                <b>Opening Bid: {item.openingBid}</b> <br /><br />
                <b>Bid Increment: {item.bidIncrement}</b> <br /><br />
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Typography variant="h5"><b>Auction Rules </b><hr /></Typography> {/* replace auction start time, date of event, and auction end time with item data */}
                1. Bidding begins at [auction start time] on [date of event].<br/> {/* add start date to items */}
                2. Bidding ends at [auction end time] on {item.closingDate}.<br />
                3. The auction item value listed is an estimate of fair market value.<br />
                4. Bidders must use their bidder number in place of their name. Bidder numbers are assigned at the time of registration.<br />
                5. Bids must meet the minimum increment. Bids that do not meet the minimum will be disqualified.<br />
                6. Bidders may bid multiple times on the same item, as long as their bid meets the minimum increment.<br />
                7. The bidder with the highest bid for each item (or the bidder who chooses the “Buy Now” option) agrees to pay the full amount of their bid.<br />
                8. The bidder with the highest bid for each item (or the bidder who chooses the “Buy Now” option) must pay the full amount of their bid before their item can be retrieved.<br />
                9. The winning bidder must be present at the event to retrieve their item.<br />
                10. All sales are final. Exchanges or refunds are not permitted. All items are “as is.” <br />
              </Item>
            </Grid>
            <Grid item xs>
              <Item ><Typography variant="h5"><b>Bid Details </b><hr/></Typography>
                <Typography variant="h5"><b>$ </b>{item.currentBidValue}</Typography><br />
                <Typography align="center">
                  <Button color="secondary" variant="contained">$100</Button>
                &nbsp;&nbsp;&nbsp;
                  <Button color="secondary" variant="contained">$200</Button>
                &nbsp;&nbsp;&nbsp;
                  <Button color="secondary"variant="contained">$300</Button>
                </Typography>
              </Item>
            </Grid>
          </Grid>
        </Box>

      </div>
    </div>
  )
}

export default ItemDetails