import React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function Order (props) {
  // this function shows the Addresses of the order, distance and price.
      return (

          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              <strong>From:</strong> {props.order.originAddress}
              <br></br>
              <strong>To:</strong> {props.order.destinationAddress}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Distance:{props.order.distance} km
              <br></br>
              <strong>
                Price : {parseFloat(props.order.price).toFixed(2)}€{" "}
              </strong>
            </Typography>
          </CardContent>

      );
};
