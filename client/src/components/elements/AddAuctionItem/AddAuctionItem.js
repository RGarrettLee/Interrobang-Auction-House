import React from 'react'
import { Box, TextField, Paper, Button, Typography } from '@mui/material/';
import { ImageUpload } from '../index'

const AddAuctionItem = () => {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Typography>Artwork Details<hr /></Typography><br />
      <TextField id="id" label="Lot Number" variant="filled" />
      <TextField id="Artwork Title" label="title" variant="filled" />
      <TextField
        id="slide1desc"
        label="Description"
        multiline
        rows={4}
        defaultValue="Default Value"
        variant="filled"
      />
      <br />
      <Typography>Artist Details<hr /></Typography><br />
      <TextField id="slide2title" label="Artist Name" variant="filled" />
      <TextField id="slide2subtitle" label="City of Origin" variant="filled" />
      <TextField
        id="slide2desc"
        label="Artist Information"
        multiline
        rows={4}
        defaultValue="Default Value"
        variant="filled"
      />
      <br />
      <Typography>Artwork Information<hr /></Typography><br />
      <TextField id="slide3title" label="Date Produced" variant="filled" />
      <TextField id="slide3subtitle" label="Size of Piece" variant="filled" />
      <TextField
        id="slide3desc"
        label="Medium"
        multiline
        rows={4}
        defaultValue="Paint style and type"
        variant="filled"
      />
      <br />
      <Typography>Appraisal Information<hr /></Typography>
      <TextField id="itemValue" label="Valuation" variant="filled" />
      <TextField id="startingBid" label="Opening Bid" variant="filled" />
      <TextField id="currentBid" label="Current Bid Value" variant="filled" />
      <br />
      <ImageUpload />
      <TextField id="image" label="image" variant="filled" />
      <br />

      <Button variant="contained">Create Item</Button>
    </Box>
  )
}

export default AddAuctionItem