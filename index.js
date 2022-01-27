import express from 'express'
import mongoose from "mongoose";

//Test run 

import routes from './routes/router.js'

const app = express()
const port = process.env.PORT || 8000;

app.use('/start', routes);
app.use(express.json());

mongoose.connect('mongodb://localhost/asap')
mongoose.connection.once('open', function(){
  console.log('Connection Successful')
}).on('Error', function(error){
  console.log('Connection Failure', error)
});


// TO DO check the routes we actually want to keep.

app.get('/', (req, res) => {
  res.send('Hello')
})

app.get('/Anshul', (req, res) => {
  res.send('Anshul is great')
})
app.listen(8000)

console.log("server is running on http://localhost:8000/")

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}/`)
});

