import React , { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchAddress from './SearchAddress'

function CreateOrder(order) {
        console.log(order);

  const [distance, setDistance] = useState({
    distance: 0.0
  });

  const [price, setPrice] = useState({
    price: 0.0
  });

  function getDistance(aO, bO, aD, bD){
    let aDiff = aO - aD;
    let bDiff = bO - bD;
    const distance = Math.sqrt(aDiff * aDiff + bDiff * bDiff)
    setDistance({
      distance: distance
    })
    // console.log(distance);
  }

  // componentDidMount() {
  //   this.setState({

  //   })
  // }

  function calculatePrice(distance) {
    const price = 3 + distance*0.5
    setPrice({
      price: price
    })
    // console.log(price);
  }

  function onSubmit(event) {
    event.preventDefault();
      // to submit the values and send them to the database
      const order = {
        // originAddress: state.originAddress,
        // latOrigin: state.latOrigin,
        // lonOrigin: state.lonOrigin,
        // destinationAddress: value.destinationAddress,
        // latDestination: value.latDestination,
        // lonDestination: value.lonDestination,
        distance: distance.distance,
        // date: new Date(),
        price: price.price
      }
      console.log(order);
  }

return (
  <div>
    <div className="container-md" style={{marginTop: "30px"}}>
      <h2 className="title-order">Order</h2>
      <form onSubmit={onSubmit} className="orderForm" style={{marginTop: "30px"}}>
        <div className="row mb-3">
        </div>
        <div className="row mb-3">

          <div className="col-sm-10">

          </div>
        </div>
        <button type="submit" className="btn btn-success">Confirm</button>
      </form>
    </div>
  </div>
);
}



export default CreateOrder;
