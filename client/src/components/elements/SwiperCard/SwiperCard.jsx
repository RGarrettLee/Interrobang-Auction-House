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
                <Typography fontFamily="Montserrat Alternates" color="primary.dark" gutterBottom variant="h5" component="div">
                    {props.title}
                </Typography>
                <Typography variant="body2" color="primary.dark">
                    <b>Lot#:</b> {props.id}
                </Typography>
                <Typography variant="body2" color="primary.dark">
                    <b>Current Bid: </b>${props.currentBid}
                </Typography>
                <Typography variant="body2" color="primary.dark">
                    <b>Closing Date:</b> {props.closingDate}
                </Typography>
            </CardContent>
            <CardActions>
                <NavLink to="/item-details" style={{ textDecoration: 'none' }}>
                    <Button variant="contained" color="secondary">View Item</Button>
                </NavLink>
            </CardActions>
        </Card>
    );
}
