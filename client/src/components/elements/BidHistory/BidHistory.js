import React from 'react'
import { Button, AppBar, Toolbar, Typography } from '@mui/material'

let BidStatus= "WonBid"
function Component(BidStatus) {
  
  switch (BidStatus) {
    case 'WonBid':
      return <Button color="secondary" variant="contained">Complete Purchase</Button>
      
    case 'LostBid':
      return <Typography>Bidding has concluded</Typography>
      
    case 'IncreaseBid':
      return <span><Button color="secondary" variant="contained">$100</Button><Button>$100</Button><Button>$100</Button></span>
      
    default:
      return  <Button color="secondary" variant="contained">View Details</Button>
  }}
const BidHistory = () => {

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