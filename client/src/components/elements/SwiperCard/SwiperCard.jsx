import * as React from 'react';
import { NavLink } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function SwiperCard(props) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt={props.title}
                height="140"
                image={props.image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.title}
                </Typography>
                <Typography variant="body2" color="solids.black">
                    Lot#: {props.id} <br />
                    Bid Closes:{props.closingDate}<br />
                    Current Bid: {props.currentBid}

                </Typography>
            </CardContent>
            <CardActions>
                <NavLink to="/item-details" color="secondary.main" style={{ textDecoration: 'none' }}>
                    <Button >View Item</Button>
                </NavLink>
            </CardActions>
        </Card>
    );
}
