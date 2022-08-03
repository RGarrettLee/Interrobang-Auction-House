import React from 'react'
import { AddAuctionItem, AuctionManager, TabPanel } from '../../elements/index';
import { Box, Paper, Grid, styled, Typography } from '@mui/material';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.fontFamily.MontserratAlternates,
  margin: theme.spacing(5),
  padding: theme.spacing(1),
  textAlign: 'Center',
  color: theme.palette.text.secondary,
}));

const Admin = () => {
  return (
    <Box sx={{ marginTop: '50px', flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs>
          <Item><Typography variant="h5" fontFamily="Montserrat Alternates">Auction Manager<hr /></Typography>
            <Typography variant="body2" ><TabPanel/></Typography>
          </Item>
        </Grid>

      </Grid>
    </Box>

  )
}

export default Admin