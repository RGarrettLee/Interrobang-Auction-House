import React from 'react'
import { Button, AppBar, Toolbar, Typography } from '@mui/material'

function Component(props) {
  let BidStatus = "increaseBid"; //<<<<<<<<<<<<<<<<<<<<<<<<Change to prop when using DB
  switch (BidStatus) {
    case 'WonBid':
      return <Button color="secondary" variant="contained">Pay Now</Button>
    case 'LostBid':
      return <Button color="primary" variant="contained">Closed</Button>
    case 'IncreaseBid':
      return <span><Button color="secondary" variant="contained">Increase Bid</Button></span>
    default:
      return  <Button color="secondary" variant="contained">View Details</Button>
}}

const BidHistory = (props) => {
  return (
    <div className="container">
      <div className="row">
      <div className="col">
          <Typography fontFamily="Montserrat Alternates">$props.closingDate</Typography>
        </div>
        <div className="col">
          <Typography fontFamily="Montserrat Alternates">props.title</Typography>
        </div>
        <div className="col">
        <Typography fontFamily="Montserrat Alternates">$props.currentBid</Typography>
        </div>
        <div className="col">
          <Component />
        </div>
      </div>
    </div>
  )
}

export default BidHistory