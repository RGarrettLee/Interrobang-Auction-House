import React from 'react'
import { UserDetails, BidHistory } from '../../elements/index';
import { Box, Paper, Grid, styled, Typography } from '@mui/material';
import { useQuery } from '@apollo/client';
import { QUERY_AUCTION_ITEMS } from '../../../utils/queries';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.fontFamily.MontserratAlternates,
  margin: theme.spacing(5),
  padding: theme.spacing(1),
  textAlign: 'Center',
  color: theme.palette.text.secondary,
}));


const Dashboard = () => {
  const { loading, error, data } = useQuery(QUERY_AUCTION_ITEMS);
  const items = data?.allAuctionItems || [];
  return (
    <Box sx={{ marginTop:'50px',flexGrow: 1 }}>
          <Grid container spacing={1}>
            <Grid item xs>
          <Item><Typography variant="h5" fontFamily="Montserrat Alternates">User Details<hr/></Typography>
                <UserDetails/>
              </Item>
            </Grid>
            <Grid item xs={8}>
          <Item><Typography variant="h5" fontFamily="Montserrat Alternates">Auction Manager<hr/></Typography>
            <Typography variant="body2" >
              {items.map((item) => <BidHistory />)}
            </Typography>
          </Item>
            </Grid>
           
          </Grid>
        </Box>
  
  )
}

export default Dashboard