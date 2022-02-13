import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Order = props => (
  <tr>
    <td>From: {props.order.originAddress}</td>
    <td>To: {props.order.destinationAddress}</td>
    <td>{props.order.distance}</td>
    <td>{props.order.price}</td>
    <td>
      <Link to={"/update/"+props.order._id}>Confirm</Link> | <a href="#" onClick={() => { props.deleteOrder(props.order._id) }}>cancel order</a>
    </td>
  </tr>
)


export default class Recap extends Component {
  constructor(props) {
    super(props);

    this.deleteOrder = this.deleteOrder.bind(this)

    this.state = {orders: []};
  }

  componentDidMount() {
    axios.get('http://localhost:3000/orders/'+'6206f77c999b020d967449a0')
      .then(response => {
        this.setState({ orders: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteOrder(id) {
    axios.delete('http://localhost:3000/orders/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      orders: this.state.orders.filter(el => el._id !== id)
    })
  }

  OrderList() {
    return this.state.orders.map(currentorder => {
      return <Order order={currentorder} deleteorder={this.deleteorder} key={currentorder._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Recap</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>originAddress</th>
              <th>destinationAddress</th>
              <th>distance</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
    )
  }
}
