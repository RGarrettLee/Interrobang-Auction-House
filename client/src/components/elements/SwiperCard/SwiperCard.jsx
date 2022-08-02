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
                <Typography fontFamily="Roboto" variant="body" color="primary.dark">
                    <b>Lot#:</b> {props.id}<br/>
                </Typography>
                <Typography fontFamily="Roboto" variant="body" color="primary.dark">
                    <b>Current Bid: </b>${props.currentBid}<br />
                </Typography>
                <Typography fontFamily="Roboto" variant="body" color="primary.dark">
                    <b>Closing Date:</b> {props.closingDate}
                </Typography>
            </CardContent>
            <CardActions>
                <NavLink to={{ pathname: "/item-details" }} state={{ title: props.title }} style={{ textDecoration: 'none' }}>
                    <Button fontFamily="Roboto" variant="contained" color="secondary">View Item</Button>
                </NavLink>
            </CardActions>
        </Card>
    );
}
