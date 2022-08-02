import React from 'react';
import Countdown, { zeroPad } from 'react-countdown';
import { Button, Typography } from '@mui/material';

// set date 
const event = new Date('2022-08-04T13:30:00');
// Random component
const Completionist = () => <span>The bidding for this item is now closed</span>;

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        // Render a completed state
        return  <Completionist />;
    } else {
        // Render a countdown
        return <span>{zeroPad(days)}:{zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}</span>;
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
