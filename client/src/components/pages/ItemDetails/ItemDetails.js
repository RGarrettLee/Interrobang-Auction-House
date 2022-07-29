import React from 'react'
import { useQuery } from '@apollo/client';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { SwiperParalax } from '../../elements/'

import { QUERY_AUCTION_ITEMS } from '../../../utils/queries';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  margin: theme.spacing(2),
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



const ItemDetails = () => {
  const { data } = useQuery(QUERY_AUCTION_ITEMS);
  const items = data?.thoughts || [];
  console.log(items);

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