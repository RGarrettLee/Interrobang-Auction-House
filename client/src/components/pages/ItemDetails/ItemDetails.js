import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { SwiperParalax } from '../../elements/'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  margin: theme.spacing(2),
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



const ItemDetails = () => {
  return (

    <div>
      <div><SwiperParalax /></div>
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            <Grid item xs>
              <Item>
                Bid Closing<br />
                Bid Rules<br />
                Bid Closing<br />
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                Bid Closing<br />
                Bid Rules<br />
                Bid Closing<br />
              </Item>
            </Grid>
            <Grid item xs>
              <Item>
                Bid Closing<br />
                Bid Rules<br />
                Bid Closing<br />

              </Item>
            </Grid>
          </Grid>
        </Box>

      </div>
    </div>











  )
}

export default ItemDetails