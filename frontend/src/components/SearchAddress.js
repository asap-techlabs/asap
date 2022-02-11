import React, { useState } from 'react'
import axios from 'axios';
import Address from './Address'

// this components incorporates the search of addresses on the form.

export default function SearchAddress() {
//  we initialize the state and the value for the From(origin) & To(destination) addresses
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

    function onChangeOriginAddress(address) {
      // this changes the value of the origin address
      setState({
        originAddress: address.properties.formatted,
        latOrigin: address.properties.lat,
        lonOrigin: address.properties.lon
      });
    };

    function onChangeDestinationAddress(address) {
      // this changes the value of the destination address
      setValue({
        destinationAddress: address.properties.formatted,
        latDestination: address.properties.lat,
        lonDestination: address.properties.lon
      });

    }

    function onSubmit(event) {
      event.preventDefault();
      // to submit the values and send them to the database
      const order = {
        originAddress: state.originAddress,
        latOrigin: state.latOrigin,
        lonOrigin: state.lonOrigin,
        destinationAddress: value.destinationAddress,
        latDestination: value.latDestination,
        lonDestination: value.lonDestination,
        distance: 0,
        date: new Date(),
        price: 0
      }
      console.log(order);
      axios.post('http://localhost:8000/orders/add', order)
        .then(res => console.log(res.data));


    }

// this returns the form visible to the user and call the functions to get the values
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
          <Address type='text' isOrigin={false} onPlaceSelect={onChangeDestinationAddress} searchAddress={value} setDestinationAdress={setValue}
          />
        </div>
      </div>
      <button type="submit" className="btn btn-success">Next</button>
    </form>
  </div>
  )
}
