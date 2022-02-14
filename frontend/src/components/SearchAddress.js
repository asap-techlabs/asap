import React, { useState } from 'react'
import axios from 'axios';
import {getDistance} from 'geolib';
import Address from './Address'
// this function incorporates the search of addresses on the form.

export default function SearchAddress() {
//  we initialize the state, value, distance and price for the From(origin) & To(destination) addresses,
// distance in between both and price
  const [state, setState] = useState({
    originAddress: '',
    latOrigin: 0.0,
    lonOrigin: 0.0
  });

  const [value, setValue] = useState({
    destinationAddress: '',
    latDestination: 0.0,
    lonDestination: 0.0
  });

  const [distance, setDistance] = useState({
    distance: 0.0
  });

  const [price, setPrice] = useState({
    price: 0.0
  });

  function onChangeOriginAddress(address) {
    // this changes the value of the origin address once selected on the form
    setState({
      originAddress: address.properties.formatted,
      latOrigin: parseFloat(address.properties.lat.toFixed(4)),
      lonOrigin: parseFloat(address.properties.lon.toFixed(4))
    });
  };

  function onChangeDestinationAddress(address) {
    // this changes the value of the destination address once selected on the form
    setValue({
      destinationAddress: address.properties.formatted,
      latDestination: parseFloat(address.properties.lat.toFixed(4)),
      lonDestination: parseFloat(address.properties.lon.toFixed(4))
    });
    //and with both addresses call the function to calculate the distance
    calculateDistance();
  }

  function calculateDistance() {
    // this function call the package geolib https://github.com/manuelbieh/geolib to calculate
    // the distance using the coordinates
    const distance = getDistance(
      { latitude: state.latOrigin, longitude: state.lonOrigin },
      { latitude: value.latDestination, longitude: value.lonDestination}
    );
    setDistance({
      distance: distance / 1000,
    })
    // once the distance is calculated, it calls the function to calculate the price.
      calculatePrice((distance / 1000));
    }

  function calculatePrice(distance) {
    // it calculates the price with a minimum fixed rate plus a value by kilometer
    let price = parseFloat((10 + distance*0.5).toFixed(2));
    setPrice({
      price: price
    })
  }

  function onSubmit(event) {

      // this funcion creates the order to submit all the values and send them to the database
    const order = {
      originAddress: state.originAddress,
      latOrigin: state.latOrigin,
      lonOrigin: state.lonOrigin,
      destinationAddress: value.destinationAddress,
      latDestination: value.latDestination,
      lonDestination: value.lonDestination,
      distance: distance.distance,
      date: new Date(),
      price: price.price
    }
    // POST request to add an order
    axios.post('http://localhost:8000/orders/add', order)
      .then(res => console.log(res.data));
    this.props.history.push('http://localhost:3000/orders/');
  }

// this returns the form visible to the user and call all the functions on this file
  return (
  <div className="container-md" style={{marginTop: "30px"}}>
    <h2 className="title-search-form">Where?</h2>
    <form onSubmit={onSubmit} className="searchForm" style={{marginTop: "30px"}}>
      <div className="row mb-3">
        <label htmlFor="from" className="col-sm-2 col-form-label">From:</label>
        <div className="col-sm-10">
          <Address type='text' isOrigin={true} onPlaceSelect={onChangeOriginAddress} searchAddress={state} setOriginAdress={setState}/>
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="to" className="col-sm-2 col-form-label">To:</label>
        <div className="col-sm-10">
          <Address type='text' isOrigin={false} onPlaceSelect={onChangeDestinationAddress} searchAddress={value} setDestinationAdress={setValue} setDistance={setDistance} calculateDistance={calculateDistance} setPrice={setPrice} calculatePrice={calculatePrice}
          />
        </div>
      </div>
      <button type="submit" className="btn btn-success">Next</button>
    </form>
  </div>
  )
}
