import React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StraightenIcon from "@mui/icons-material/Straighten";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

export default function Order (props) {
  // this function shows the Addresses of the order, distance and price.
      return (
        <CardContent>
          <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
            <strong>
              {" "}
              <LocationOnIcon />
              From:
            </strong>{" "}
            {props.order.originAddress}
            <br></br>
            <strong>
              {" "}
              <LocationOnIcon />
              To:
            </strong>{" "}
            {props.order.destinationAddress}
          </Typography>
          <Typography sx={{ mb: 1.5, fontSize: 18 }} color="text.secondary">
            <StraightenIcon /> Distance:{props.order.distance} km
            <br></br>
            <strong>
              <AttachMoneyIcon /> Price:{" "}
              {parseFloat(props.order.price).toFixed(2)}€{" "}
            </strong>
          </Typography>
        </CardContent>
      );
};
