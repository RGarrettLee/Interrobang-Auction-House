import React from 'react'
import { Button, AppBar, Toolbar, Typography } from '@mui/material'

const AuctionManager = (props) => {
  const isBidOpen = true;
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
        {isBidOpen ? (
            <span>
            <Button variant="contained" color="primary">Edit Item</Button>&nbsp;
            <Button variant="contained" color="secondary">Delete Item</Button>
            </span>
          ) : (
            <span>
            <Button variant="contained" color="primary">Bid Details</Button>&nbsp;
            <Button variant="contained" color="secondary">Delete Item</Button>
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default AuctionManager