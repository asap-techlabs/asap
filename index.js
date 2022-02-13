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


app.use('/orders', ordersRoutes);

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// mongoose.connect('mongodb://localhost/asap')
mongoose.connection.once('open', function(){
  console.log('Connection Successful')
}).on('Error', function(error){
  console.log('Connection Failure', error)
});

// TO DO check the routes we actually want to keep.

app.get('/', (req, res) => {
  res.send('Hello')
})



// app.get('/Anshul', (req, res) => {
//   res.send('Anshul is great')
// })
// // app.listen(8000)
// // I had to comment this line as it was conflicting with the other port.

// console.log("server is running on http://localhost:8000/")

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}/`)
});

export default app;
