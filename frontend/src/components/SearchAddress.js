import { useState } from 'react'
import Address from './Address'

// this component incorporates the search of addresses on the form calling the API.

export default function SearchAddress(props) {

  const [state, setState] = useState({
      originAddress: props,
      destinationAddress: '',
      distance: 0,
      date: new Date(),
      price: 0
      });

    function onChangeOriginAddress(props) {
      this.setState({
        originAddress: props.target.value
      });
    };

    function onChangeDestinationAddress(props) {
    this.setState({
      destinationAddress: props.target.value
    });
    }

    function onSubmit(event) {
  event.preventDefault();

  const order = {
    originAddress: state.originAddress,
    destinationAddress: state.destinationAddress,
    distance: state.distance,
    date: state.date,
    price: state.price,
  }
  console.log(order);
}
  return (
  <div className="container-md" style={{marginTop: "30px"}}>
    <h2 className="title-search-form">Where? </h2>
    <form onSubmit={onSubmit} className="searchForm" style={{marginTop: "30px"}}>
      <div className="row mb-3">
        <label htmlFor="from" className="col-sm-2 col-form-label">From:</label>
        <div className="col-sm-10">
          <Address type='text' onPlaceSelect={onChangeOriginAddress}/>
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="to" className="col-sm-2 col-form-label">To:</label>
        <div className="col-sm-10">
          <Address type='text' onPlaceSelect={onChangeDestinationAddress}
          />
        </div>
      </div>
      <button type="submit" className="btn btn-success">Next</button>
    </form>
  </div>
  )
}
