import express from 'express'
const app = express()

app.get('/', (req, res) => {
  res.send('Hello')
})

app.get('/Anshul', (req, res) => {
  res.send('Anshul is great')
})
app.listen(8000)

console.log("server is running on http://localhost:8000/")
