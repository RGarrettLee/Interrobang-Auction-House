import React from 'react'
import { Button, AppBar, Toolbar, Typography } from '@mui/material'

const BidHistory = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Typography fontFamily="Montserrat Alternates">props.itemname</Typography>
        </div>
        <div className="col">
          <Typography >$props.currentBid</Typography>
        </div>
        <div className="col">
          <Button variant="contained" color="secondary">$100</Button>&nbsp;&nbsp;&nbsp;
          <Button variant="contained" color="secondary">$200</Button>&nbsp;&nbsp;&nbsp;
          <Button variant="contained" color="secondary">$300</Button>
        </div>
      </div>
    </div>
  )
}

export default BidHistory