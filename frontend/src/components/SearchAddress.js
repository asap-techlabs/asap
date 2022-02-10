import React, { useState } from 'react'
import Address from './Address'

// this components incorporates the search of addresses on the form.

export default function SearchAddress() {
//  we initialize the state and the value for the From & To addresses
  const [state, setState] = useState({
      originAddress: '',
  });
  const [value, setValue] = useState({
      destinationAddress: ''
    });

    function onChangeOriginAddress(address) {
      // this changes the value of origin address
      setState({
        originAddress: address.properties.formatted
      });
    };

    function onChangeDestinationAddress(address) {
      // this changes the value of destination address
      setValue({
        destinationAddress: address.properties.formatted
      });

    }

    function onSubmit(event) {
      event.preventDefault();
      // to submit the values and send them to the databas
      const order = {
        originAddress: state.originAddress,
        destinationAddress: value.destinationAddress,
        distance: 0,
        date: new Date(),
        price: 0
      }
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
