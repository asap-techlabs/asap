import express from 'express'
import mongoose from "mongoose";
import cors from 'cors';
import 'dotenv/config';
import routes from './routes/router.js'
import ordersRoutes from './routes/orders.js';


const app = express()
const port = process.env.PORT || 8000;

app.use('/', routes);
app.use(cors());
app.use(express.json());

// routes for the orders
app.use('/orders', ordersRoutes);

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

//connection to the database
// mongoose.connect('mongodb://localhost/asap')
mongoose.connection.once('open', function(){
  console.log('Connection Successful')
}).on('Error', function(error){
  console.log('Connection Failure', error)
});

//backend runs in port (8000)
app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}/`)
});

export default app;
