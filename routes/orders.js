import express from 'express'
import cors from 'cors';
const router = express.Router();
import Order  from '../models/order.model.js';

// allows to redirect
const corsOptions ={
    origin:'http://localhost:3000',
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:307
}

router.use(cors(corsOptions));

// allows to find orders
router.route('/').get((req, res) => {
  Order.find()
    .then(orders => res.json(orders))
    .catch(err => res.status(400).json('Error: ' + err));
});

// allows to add a new order
router.route('/add').post((req, res) => {
  const originAddress = req.body.originAddress;
  const latOrigin = Number(req.body.latOrigin);
  const lonOrigin = Number(req.body.lonOrigin);
  const destinationAddress = req.body.destinationAddress;
  const latDestination = Number(req.body.latDestination);
  const lonDestination = Number(req.body.lonDestination);
  const description = req.body.description;
  const date = Date.parse(req.body.date);
  const distance = Number(req.body.distance);
  const price = Number(req.body.price);

  const newOrder = new Order({
  originAddress,
  latOrigin,
  lonOrigin,
  destinationAddress,
  latDestination,
  lonDestination,
  description, date,
  distance,
  price,
  });


  newOrder.save()
  // .then(() => res.json(newOrder._id))
  .then(() => res.json(newOrder._id))
  .catch(err => res.status(400).json('Error: ' + err));
});

//allows to find a specific order
router.route('/:id').get((req, res) => {
  Order.findById(req.params.id)
    .then(order => res.json(order))
    .catch(err => res.status(400).json('Error: ' + err));
});


export default router;
