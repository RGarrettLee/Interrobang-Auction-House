import { React, useState } from 'react'

import { Box, Paper, Grid, styled, Button, TextField, Typography } from '@mui/material';
import { SwiperParalax } from '../../elements/'

// use graphql
import { useQuery } from '@apollo/client';
import { QUERY_AUCTION_ITEM } from '../../../utils/queries';
import Countdown, { zeroPad } from 'react-countdown';


// Get passed in props from link
import { useLocation } from 'react-router-dom';



let isBidClosed
//Table Columns
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
    variables: { name }
  });

  const item = data?.oneAuctionItem || [];
  if (error) console.log(error);
  loading ? console.log('Loading') : console.log(item);



  //Countdown timer
  // set date 
  const event = new Date(item.closingDate);
  // Random component
  const Completionist = () => <span>The bidding for this item is now closed</span>;

  // Renderer callback with condition
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      isBidClosed = true;
      console.log(completed + " " + isBidClosed)
      // Render a completed state
      return <Completionist />;
    } else {

      // Render a countdown
      return <div>{zeroPad(days)}:{zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}</div>;
    }
  };





  return (

    <div>
      <div><SwiperParalax title={name} imageUrl={item.images} itemDescription={item.itemDescription} lot={item.lot} artistName={item.artistName} origin={item.origin} artistInfo={item.artistInfo} itemCreated={item.created} size={item.size} artMedium={item.artMedium} /></div>
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            <Grid item xs>

              <Item>
                <Typography variant="h5" align="center"><b>Details</b><hr /></Typography>
                <Typography variant="h6"> <b>Valuation: ${item.valuation}</b> <br /><br />
                  <b>Opening Bid: ${item.openingBid}</b> <br /><br /></Typography>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Typography variant="h5" align="center"><b>Auction Rules </b><hr /></Typography> {/* replace auction start time, date of event, and auction end time with item data */}
                {/* add start date to items */}
                <Typography variant="h6"> <ol>
                  <li>Bidding ends at {item.closingDate}.</li>
                  <li>The auction item value listed is an estimate of fair market value.</li>
                  <li>Bidders must use their bidder number in place of their name. Bidder numbers are assigned at the time of registration.</li>
                  <li>Bids must meet the minimum increment. Bids that do not meet the minimum will be disqualified.</li>
                  <li>Bidders may bid multiple times on the same item, as long as their bid meets the minimum increment.</li>
                  <li>The bidder with the highest bid for each item (or the bidder who chooses the “Buy Now” option) agrees to pay the full amount of their bid.</li>
                  <li>The bidder with the highest bid for each item (or the bidder who chooses the “Buy Now” option) must pay the full amount of their bid before their item can be retrieved.</li>
                  <li>The winning bidder must be present at the event to retrieve their item.</li>
                  <li>All sales are final. Exchanges or refunds are not permitted. All items are “as is.” </li>
                </ol>
                </Typography>
              </Item>
            </Grid>
            <Grid item xs>
              <Item >
                <Typography variant="h5" align="center"><b>Bid Closing </b><hr />
                  <Countdown
                    date={Date.now() + 5000}  //<<<<<<<<<<<<<<<< CHANGE Between {event} ||  for testing
                    renderer={renderer}

                  />

                </Typography>
              </Item>
              <Item>
                <Typography align="center">
                  <Typography variant="h5" ><b>Current Value </b><hr /></Typography>
                  <Typography variant="h5"><b>$ {item.currentBidValue} </b><hr /></Typography>
                  <TextField id="placeBid" label="$ Place Bid" variant="filled" />
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