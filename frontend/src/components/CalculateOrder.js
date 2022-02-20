import React, { Component } from 'react';
import Order from "./Order.js"


  export default class CalcOrder extends Component {
    constructor(props) {
      super(props);
    this.state = {

    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    // this function gets the data from the database and set the values from there to the state.
    const id = window.location.pathname.split('/')[2];
    fetch('http://localhost:8000/orders/'+id)
      .then(data => data.json())
      .then((data) => {
        this.setState([{
          id : id,
          originAddress: data.originAddress,
          latOrigin: data.latOrigin,
          lonOrigin: data.lonOrigin,
          destinationAddress: data.destinationAddress,
          latDestination: data.latDestination,
          lonDestination: data.lonDestination,
          distance: data.distance,
          date: data.date,
          price: data.price
        }])
      });
  }

  orderShow() {
    // as the order is stocked as an object in the state this function iterates
    //over the object to get the values that are going to be passed and displayed in the Order
    // component called  at the top.
    let order = {};
    Object.entries(this.state).forEach(([key, value]) => order = value);
    return <Order order={order} key={order.id}/>;
  }

  render() {
    // renders the information
    return (
      <div>
        { this.orderShow() }
      </div>
    )
  }
}
