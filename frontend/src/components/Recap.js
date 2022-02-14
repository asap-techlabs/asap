import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { axios } from 'axios';

const Order = props => (
<div>
    <p>{props.order.originAddress}</p>
    <p>{props.order.destinationAddress}</p>
    <p>{props.order.distance} km</p>
    <p>{parseFloat(props.order.price.toFixed(2))}€</p>
<Link to={"/edit/"+props.order._id}>edit</Link> | <Link to={"/delete/"+props.order._id}>delete</Link>

</div>
)

  export default class Recap extends Component {
    constructor(props) {
      super(props);


    // this.deleteOrder = this.deleteOrder.bind(this)

    this.state = {orders: []};
  }



  componentDidMount() {
    this.getData();
  }

  getData = () => {
    fetch('http://localhost:8000/orders')
      .then(data => data.json())
      .then((data) => {
        this.setState({
          orders: data
        })
      });
  }

  deleteOrder(id) {
    axios.delete(`http://localhost:8000/orders//${id}`)
      .then(response => { console.log(response.data)});
        this.props.history.push("/");
    this.setState({
      orders: this.state.orders.filter(el => el._id !== id)
    })
  }

  orderList() {
    return this.state.orders.map(currentorder => {
      return <Order order={currentorder} deleteorder={this.deleteorder} key={currentorder._id}/>;
    })
  }

  render() {

    return (
      <div>
        <h3>Recap</h3>
          <div>
          { this.orderList() }
          </div>
      </div>
    )
  }
}
