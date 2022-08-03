import React, { useState } from 'react'
import { Box, TextField, Button, Typography, Stack } from '@mui/material';
import { ImageUpload } from '../index'
import PropTypes from 'prop-types';
import { flexbox } from '@mui/system';
import { ADD_AUCTIONITEM } from '../../../utils/mutation';
import { useMutation } from '@apollo/client'

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
  const [addAuctionItem, { error, data }] = useMutation(ADD_AUCTIONITEM);

  const [formState, setFormState] = useState({
    name: '',
    images: '',
    itemDescription: '',
    artistName: '',
    origin: '',
    artistInfo: '',
    dateProduced: '',
    size: '',
    artMedium: '',
    valuation: 0,
    openingBid: 0,
    closingBidValue: 0,
    closingDate: '',
    lot: 0,
  });
  
  const handleChange = (event) => {
    const {name, value} = event.target;
  
    setFormState({
      ...formState,
      [name]:value
    })
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log('something');
      console.log(formState);
      const { data } = await addAuctionItem({
        variables: { ...formState }
      })
    } catch (error) { 
      console.log(error);
    }
  }

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
      <TextField id="name" label="Artwork Title" variant="filled" onChange={handleChange} />
      <TextField id="ClosingDate" label="Bid Closing Date" variant="filled" onChange={handleChange}  />
      <TextField
        id="slide1desc"
        label="Description"
        multiline
        rows={4}
        variant="filled" 
        onChange={handleChange}
      />
      <br />
      <Typography>Artist Details<hr /></Typography><br />
      <TextField id="slide2title" label="Artist Name" variant="filled" onChange={handleChange} />
      <TextField id="slide2subtitle" label="City of Origin" variant="filled" onChange={handleChange} />
      <TextField
        id="slide2desc"
        label="Artist Information"
        multiline
        rows={4}
        variant="filled" 
        onChange={handleChange}
      />
      <br />
      <Typography>Artwork Information<hr /></Typography><br />
      <TextField id="slide3title" label="Date Produced" variant="filled" onChange={handleChange} />
      <TextField id="slide3subtitle" label="Size of Piece" variant="filled" onChange={handleChange} />
      <TextField
        id="slide3desc"
        label="Art Medium"
        multiline
        rows={4}
        variant="filled" 
        onChange={handleChange}
      />
      <br />
      <Typography>Appraisal Information<hr /></Typography>
      <TextField id="itemValue" label="Valuation" variant="filled" onChange={handleChange}  />
      <TextField id="startingBid" label="Opening Bid" variant="filled" onChange={handleChange} />
      <TextField id="currentBidValue" label="Current Bid Value" variant="filled" onChange={handleChange}  />
      <br />
      <Typography>Image Upload<hr /></Typography>
      <Box className="text-center justify-center p-2" component="div" sx={{
        display: 'flex',
        justifyContent: 'center',
        p: 1,
        m: 1,
}}><Item><ImageUpload state={formState} setState={setFormState}/></Item>
        
      </Box>
      <br />

      <Button margin="5" variant="contained" color="secondary" onClick={handleFormSubmit}>Create Item</Button>
    </Box>
  )
}

export default AddAuctionItem