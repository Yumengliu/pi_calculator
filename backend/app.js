const express = require('express')
const generate_points = require('./points.js')

const app = express()
const port = 8999

app.get('/api/points', (req, res) => {
  const num_of_points = req.query.n;
  res.json(generate_points(num_of_points));
})

app.listen(port);
app.use(express.static('build'))