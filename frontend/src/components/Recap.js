import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const order = props => (
  <tr>
    <td>From: {props.order.originAddress}</td>
    <td>To: {props.order.destinationAddress}</td>
    <td>Distance:{props.order.distance}</td>
    <td>Price: {props.order.price}</td>
    <td>
      <Link to={"/update/"+props.order._id}>Confirm</Link> | <a href="#" onClick={() => { props.deleteOrder(props.order._id) }}>cancel order</a>
    </td>
  </tr>
)


export default class Recap extends Component {
  constructor(props) {
    super(props);

    this.deleteOrder = this.deleteOrder.bind(this)

    this.state = {order: {}};
  }

  componentDidMount(props) {
    console.log(props);
    axios.get(`http://localhost:3000/orders/${this.props.match.params.id}`)
      .then(response => {
        this.setState({ order: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteOrder(id) {
    axios.delete(`http://localhost:3000/orders//${id}`)
      .then(response => { console.log(response.data)});
//         this.props.history.push("/");
    this.setState({
      orders: this.state.orders.filter(el => el._id !== id)
    })
  }

  // OrderList() {
  //   return this.state.orders.map(currentorder => {
  //     return <Order order={currentorder} deleteorder={this.deleteorder} key={currentorder._id}/>;
  //   })
  // }

  render() {
    // const order = this.state.order;
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
