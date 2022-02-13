import express from 'express'
const router = express.Router();
import Order  from '../models/order.model.js';

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
  .then(() => res.json('Order added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/update/:id').post((req, res) => {
  Order.findById(req.params.id)
    .then(order => {

      order.originAddress = req.body.originAddress;
      order.latOrigin = Number(req.body.latOrigin);
      order.lonOrigin = Number(req.body.lonOrigin);
      order.destinationAddress = req.body.destinationAddress;
      order.latDestination = Number(req.body.latDestination);
      order.lonDestination = Number(req.body.lonDestination);
      order.description = req.body.description;
      order.date = Date.parse(req.body.date);
      order.distance = Number(req.body.distance);
      order.price = Number(req.body.price);

      order.save()
        .then(() => res.json('Order updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

export default router;
