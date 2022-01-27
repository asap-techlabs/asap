import express from 'express'
import routes from './routes/router.js'


const app = express()
const port = process.env.PORT || 8000;

app.use('/start', routes);
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello')
})

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}/`)
});
