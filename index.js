import express from 'express'
import mongoose from "mongoose";
//Test run 
const app = express()

mongoose.connect('mongodb://localhost/asap')
mongoose.connection.once('open', function(){
  console.log('Connection Successful')
}).on('Error', function(error){
  console.log('Connection Failure', error)
});

app.get('/', (req, res) => {
  res.send('Hello')
})

app.get('/Anshul', (req, res) => {
  res.send('Anshul is great')
})
app.listen(8000)

console.log("server is running on http://localhost:8000/")

