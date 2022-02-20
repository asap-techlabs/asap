import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function Order (props) {
  // this function shows the Addresses of the order, distance and price.
      return (
        <Card sx={{ minWidth: 275, boxShadow: 'none' }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              From: {props.order.originAddress}
              <br></br>
              To: {props.order.destinationAddress}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Distance:{props.order.distance} km
              <br></br>
              <strong>Price : {parseFloat(props.order.price)}€ </strong>
            </Typography>
          </CardContent>
        </Card>
        );
};
