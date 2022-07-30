import React from 'react'
import { UserDetails } from '../../elements/index';
import { Box, Paper, Grid, styled } from '@mui/material';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.fontFamily.MontserratAlternates,
  margin: theme.spacing(5),
  padding: theme.spacing(1),
  textAlign: 'Center',
  color: theme.palette.text.secondary,
}));

const Dashboard = () => {
  return (
    <Box sx={{ marginTop:'50px',flexGrow: 1 }}>
          <Grid container spacing={1}>
            <Grid item xs>
              <Item>
                User Details<br />
                <UserDetails/>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                Auction Manager<br />
              </Item>
            </Grid>
            <Grid item xs>
              <Item>
                Current Bid Value<br />
                BID Control BUTTONS <br />
                only visible to logged in user
              </Item>
            </Grid>
          </Grid>
        </Box>
  
  )
}

export default Dashboard