import * as React from 'react';
import { NavLink } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function SwiperCard() {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="ARTWORK TITLE"
                 height="140"
                image="https://swiperjs.com/demos/images/nature-2.jpg"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    ARTWORK TITLE
                </Typography>
                <Typography variant="body2" color="text.secondary">
                   Lot#: NUMBER <br/> Bid Closes: CLOSING DATE <br /> Current Bid: VALUE
                    
                </Typography>
            </CardContent>
            <CardActions>
                <NavLink to="/item-details" color="text.secondary" style={{textDecoration: 'none'}}>
                    <Button >View Item</Button> 
                </NavLink>
            </CardActions>
        </Card>
    );
}
