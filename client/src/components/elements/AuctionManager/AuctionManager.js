import React from 'react'
import { Button, AppBar, Toolbar, Typography } from '@mui/material'

const AuctionManager = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Typography fontFamily="Montserrat Alternates">props.title</Typography>
        </div>
        <div className="col">
          <Typography >props.closingDate</Typography>
        </div>
        <div className="col">
          <Button variant="contained" color="primary">Edit Item</Button>&nbsp;
          <Button variant="contained" color="primary">Bid Details</Button>&nbsp;
          <Button variant="contained" color="secondary">Delete Item</Button>
        </div>
      </div>
    </div>
  )
}

export default AuctionManager