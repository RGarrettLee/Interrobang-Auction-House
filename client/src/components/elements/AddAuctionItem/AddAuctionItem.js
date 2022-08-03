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
    images: '',
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
<form onSubmit={handleFormSubmit}>
      {/* SLIDE1 */}
          <input
            className="form-input"
            placeholder="Artwork Title"
            name="name"
            type="text"
            onChange={handleChange}
      /><br /><br />
      <input
            className="form-input"
            placeholder="Bid Closing Date"
            name="closingDate"
            type="text"
            onChange={handleChange}
      /><br /><br />
          <input
            className="form-input"
            placeholder="Description"
        name="itemDescription"
            type="text"
            onChange={handleChange}
      /><br /><br />
      {/* SLIDE2 */}
      <input
            className="form-input"
        placeholder="Artist Name"
        name="artistName"
            type="text"
            onChange={handleChange}
      /><br /><br />
          <input
            className="form-input"
        placeholder="City of Origin"
        name="origin"
            type="text"
            onChange={handleChange}
      /> <br /><br />
          <input
            className="form-input"
        placeholder="Artist Information"
        name="artistInfo"
            type="text"
            onChange={handleChange}
      /> <br /><br />
      {/* SLIDE3 */}
          <input
            className="form-input"
        placeholder="Date Produced"
        name="dateProduced"
            type="text"
            onChange={handleChange}
      /><br /><br />
      <input
            className="form-input"
        placeholder="Size of Piece"
        name="size"
            type="text"
            onChange={handleChange}
      /><br /><br />
      <input
            className="form-input"
        placeholder="Art Medium"
        name="artMedium"
            type="text"
            onChange={handleChange}
      /><br /><br />
          {/* Prices */}
      <input
            className="form-input"
        placeholder="Valuation"
        name="valuation"
            type="text"
            onChange={handleChange}
      /><br /><br />
      <input
            className="form-input"
        placeholder="Opening Bid"
        name="openingBid"
            type="text"
            onChange={handleChange}
      /><br /><br />
      <input
            className="form-input"
            placeholder="Curent Bid Value"
        name="closingBidValue"
            type="text"
            onChange={handleChange}
      /><br /><br />
      <input
        className="form-input"
        placeholder="Closing Date"
        name="closingDate"
        type="date"
        onChange={handleChange}
      /><br /><br />
      <input
            className="form-input"
            name="images"
            type="hidden"
            onChange={handleChange}
      /><br /><br />
      <ImageUpload state={formState} setState={setFormState} />
      <br /><br />
          <button
            className="btn btn-block btn-primary"
            style={{ cursor: 'pointer' }}
            type="submit"
          >
            Submit
          </button>
        </form>












//     <Box
//       component="form"
//       sx={{
//         '& > :not(style)': { m: 1, width: '25ch' },
//       }}
//       noValidate
//       autoComplete="off"
//     >
//       <Typography>Artwork Details<hr /></Typography><br />
//       <TextField id="name" label="Artwork Title" variant="filled" onChange={handleChange} />
//       <TextField id="ClosingDate" label="Bid Closing Date" variant="filled" onChange={handleChange}  />
//       <TextField
//         id="slide1desc"
//         label="Description"
//         multiline
//         rows={4}
//         variant="filled"
//         onChange={handleChange}
//       />
//       <br />
//       <Typography>Artist Details<hr /></Typography><br />
//       <TextField id="slide2title" label="Artist Name" variant="filled" onChange={handleChange} />
//       <TextField id="slide2subtitle" label="City of Origin" variant="filled" onChange={handleChange} />
//       <TextField
//         id="slide2desc"
//         label="Artist Information"
//         multiline
//         rows={4}
//         variant="filled"
//         onChange={handleChange}
//       />
//       <br />
//       <Typography>Artwork Information<hr /></Typography><br />
//       <TextField id="slide3title" label="Date Produced" variant="filled" onChange={handleChange} />
//       <TextField id="slide3subtitle" label="Size of Piece" variant="filled" onChange={handleChange} />
//       <TextField
//         id="slide3desc"
//         label="Art Medium"
//         multiline
//         rows={4}
//         variant="filled"
//         onChange={handleChange}
//       />
//       <br />
//       <Typography>Appraisal Information<hr /></Typography>
//       <TextField id="itemValue" label="Valuation" variant="filled" onChange={handleChange}  />
//       <TextField id="startingBid" label="Opening Bid" variant="filled" onChange={handleChange} />
//       <TextField id="currentBidValue" label="Current Bid Value" variant="filled" onChange={handleChange}  />
//       <br />
//       <Typography>Image Upload<hr /></Typography>
//       <Box className="text-center justify-center p-2" component="div" sx={{
//         display: 'flex',
//         justifyContent: 'center',
//         p: 1,
//         m: 1,
// }}><Item><ImageUpload state={formState} setState={setFormState}/></Item>
        
//       </Box>
//       <br />

//       <Button margin="5" variant="contained" color="secondary" onClick={handleFormSubmit}>Create Item</Button>
//     </Box>
    
// ClosingDate: "22"
//   artMedium: ""
//   artistInfo: ""
//   artistName: ""
//   closingBidValue: 0
//   closingDate: ""
//   currentBidValue: "13"
//   dateProduced: ""
//   images: ""
//   itemDescription: ""
//   itemValue: "00"
//   lot: 0
//   name: "11"
//   openingBid: 0
//   origin: ""
//   size: ""
//   slide1desc: "33"
//   slide2desc: "66"
//   slide2subtitle: "55"
//   slide2title: "44"
//   slide3desc: "99"
//   slide3subtitle: "88"
//   slide3title: "77"
//   startingBid: "12"
//   valuation: 0







    
  )
}

export default AddAuctionItem