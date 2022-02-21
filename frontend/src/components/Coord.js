import React, { useRef, useEffect, useState, Component } from "react";
import Map from "./DisplayMap";
import CalcOrder from "./CalculateOrder";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";


// this component recovers only the coordinates of the order, to pass them to the map.
// calls the map and the order component to display relevant info
export default class Coord extends Component{

  constructor(props){
    super(props);
    this.state = {
          startCoordinates: [0, 0],
          endCoordinates: [0, 0],
        }
  }



  componentDidMount() {
    const id = window.location.pathname.split("/")[2];
    fetch("http://localhost:8000/orders/" + id)
      .then((data) => data.json())
      .then((data) =>
        this.setState({
          startCoordinates: [data.latOrigin, data.lonOrigin],
          endCoordinates: [data.latDestination, data.lonDestination],
        })
      );

  };

  render(){

    return (
      <div className="container-md" style={{ width: "400" }}>
        <Map
          start={this.state.startCoordinates}
          end={this.state.endCoordinates}
        />
        <Card sx={{ maxWidth: 330, boxShadow: "none" }}>
          <CalcOrder />
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Pickup in 15 minutes
          <br></br>
          Delivering in less than 1 hour to the destination point.
        </Typography>
        </Card>

      </div>
    );
  }
}
