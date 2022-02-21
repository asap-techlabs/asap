import React from 'react';
import { Link } from 'react-router-dom';

const Order = props => (
// this function shows the values of the order and ask to confirm the order or to go back.
<div className="card-body">
    <p className="card-subtitle mb-2 text-muted">From: {props.order.originAddress}</p>
    <p className="card-subtitle mb-2 text-muted">To: {props.order.destinationAddress}</p>
    <p className="card-text">Distance: {props.order.distance > 60? 60: props.order.distance} km</p>
    <p className="card-text"><strong>Price : {parseFloat(props.order.price)}€ </strong></p>
<Link  className="card-link btn btn-secondary btn-lg disabled" to={"/search/"}>Back</Link><Link className="card-link btn btn-success btn-lg" to={"/confirm/"+props.order._id}>Confirm</Link>

</div>
)

export default Order;
