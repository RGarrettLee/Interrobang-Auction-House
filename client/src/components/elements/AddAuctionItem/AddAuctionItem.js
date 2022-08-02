import React from 'react'
import { Box, TextField, Button, Typography, Stack } from '@mui/material';
import { ImageUpload } from '../index'
import PropTypes from 'prop-types';
import { flexbox } from '@mui/system';


function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        justifyContent: 'center',
        p: 1,
        m: 1,
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
        border: '1px solid',
        borderColor: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};


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
      <TextField id="ArtworkTitle" label="Artwork Title" variant="filled" />
      <TextField id="ClosingDate" label="Bid Closing Date" variant="filled"  />
      <TextField
        id="slide1desc"
        label="Description"
        multiline
        rows={4}
        variant="filled" 
      />
      <br />
      <Typography>Artist Details<hr /></Typography><br />
      <TextField id="slide2title" label="Artist Name" variant="filled"  />
      <TextField id="slide2subtitle" label="City of Origin" variant="filled"  />
      <TextField
        id="slide2desc"
        label="Artist Information"
        multiline
        rows={4}
        variant="filled" 
      />
      <br />
      <Typography>Artwork Information<hr /></Typography><br />
      <TextField id="slide3title" label="Date Produced" variant="filled"  />
      <TextField id="slide3subtitle" label="Size of Piece" variant="filled"  />
      <TextField
        id="slide3desc"
        label="Art Medium"
        multiline
        rows={4}
        variant="filled" 
      />
      <br />
      <Typography>Appraisal Information<hr /></Typography>
      <TextField id="itemValue" label="Valuation" variant="filled"  />
      <TextField id="startingBid" label="Opening Bid" variant="filled"  />
      <TextField id="currentBid" label="Current Bid Value" variant="filled"  />
      <br />
      <Typography>Image Upload<hr /></Typography>
      <Box component="div" sx={{
        display: 'flex',
        justifyContent: 'center',
        p: 1,
        m: 1,
}}><Item><ImageUpload /></Item>
        
      </Box>
      <br />

      <Button margin="5" variant="contained" color="secondary">Create Item</Button>
    </Box>
  )
}

export default AddAuctionItem