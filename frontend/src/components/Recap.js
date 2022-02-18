import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { axios } from 'axios';

const Order = props => (

<div>
    <p>{props.order.originAddress}</p>
    <p>{props.order.destinationAddress}</p>
    <p>{props.order.distance} km</p>
    {/* <p>{parseFloat(props.order.price.toFixed(2))}€</p> */}
<Link to={"/edit/"+props.order._id}>edit</Link> | <Link to={"/delete/"+props.order._id}>delete</Link>

</div>
)

  export default class Recap extends Component {
    constructor(props) {
      super(props);


    // this.deleteOrder = this.deleteOrder.bind(this)

    this.state = {

    };
  }



  componentDidMount() {
    this.getData();
  }

  getData = () => {
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

  // deleteOrder(id) {
  //   axios.delete(`http://localhost:8000/orders//${id}`)
  //     .then(response => { console.log(response.data)});
  //       this.props.history.push("/");
  //   this.setState({
  //     orders: this.state.orders.filter(el => el._id !== id)
  //   })
  // }

  orderShow() {
    let order = {};
    Object.entries(this.state).forEach(([key, value]) => order = value
    );
    return <Order order={order} key={order.id}/>;
    }

  render() {

    return (
      <div>
        <h3>Recap</h3>
          <div>
          { this.orderShow() }
          </div>
      </div>
    )
  }
}
