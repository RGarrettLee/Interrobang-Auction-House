import React from 'react'

import {Box,Paper,Grid,styled } from '@mui/material';
import { SwiperParalax } from '../../elements/'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  margin: theme.spacing(2),
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const bidRules = `
Rules
1. Bidding begins at {<auction start time>} on {<date of event>}.
2. Bidding ends at {<auction end time>} on {<date of event>}.
3. The auction item value listed is an estimate of fair market value.
4. Bidders must use their bidder number in place of their name. Bidder numbers are assigned at the time of registration.
5. Bids must meet the minimum increment. Bids that do not meet the minimum will be disqualified.
6. Bidders may bid multiple times on the same item, as long as their bid meets the minimum increment.
7. The bidder with the highest bid for each item (or the bidder who chooses the “Buy Now” option) agrees to pay the full amount of their bid.
8. The bidder with the highest bid for each item (or the bidder who chooses the “Buy Now” option) must pay the full amount of their bid before their item can be retrieved.
9. The winning bidder must be present at the event to retrieve their item.
10. All sales are final. Exchanges or refunds are not permitted. All items are “as is.” 
              
`

const ItemDetails = () => {
  return (

    <div>
      <div><SwiperParalax /></div>
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            <Grid item xs>
              <Item>
                Item Value<br />
                Startin Bid<br />
                Bid Increment<br />
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <bidRules />
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

      </div>
    </div>
  )
}

export default ItemDetails