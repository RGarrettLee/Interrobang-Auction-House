import * as React from 'react';
import { AddAuctionItem, AuctionManager } from '../index'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


import { useQuery } from '@apollo/client';
import { QUERY_AUCTION_ITEMS } from '../../../utils/queries';
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const { loading, error, data } = useQuery(QUERY_AUCTION_ITEMS);
    const items = data?.allAuctionItems || [];
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Manage Auctions" {...a11yProps(0)} />
                    <Tab label="Create Item" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                {items.map((item) => <AuctionManager title={item.name} closingDate={item.closingDate} currentBid={item.currentBidValue} />)}
            </TabPanel>
            <TabPanel value={value} index={1}>
                <AddAuctionItem />
            </TabPanel>
        </Box>
    );
}
