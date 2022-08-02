import React from 'react';
import Countdown, { zeroPad } from 'react-countdown';
import { Button, Typography } from '@mui/material';

// set date 
const event = new Date('2022-08-03T13:30:00'); // <<<<<<<<<<<<<<<<<<<<<<<<<<<Add date from database
// Random component
const Completionist = () => <span>The bidding for this item is now closed</span>;

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        // Render a completed state
        return <Typography variant="h5"> <Completionist /> </Typography>;
    } else {
        // Render a countdown
        return <span><b>Bid Closing: </b>{zeroPad(days)}:{zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}<br /><br /><b>$ </b>VALUE<br /><br /><Typography align="center"><Button color="secondary" variant="contained">$100</Button>&nbsp;&nbsp;&nbsp;<Button color="secondary" variant="contained">$200</Button>&nbsp;&nbsp;&nbsp;<Button color="secondary" variant="contained">$300</Button></Typography></span>;
    }
};

const BidControls = () => {
   return (
        <Countdown
           date={event}
    renderer={renderer}
  />)

};

export default BidControls 