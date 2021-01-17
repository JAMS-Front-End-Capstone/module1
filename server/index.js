const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

const PORT = 3000 || process.env.PORT;
const STATIC_DIR = path.resolve(__dirname, '..', 'client', 'dist');
const attraction = require(path.resolve(__dirname, '..', 'database', 'index.js'))

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(morgan('dev'));
app.use(express.static(STATIC_DIR))

app.use((req, res, next) => {
  console.log(`${req.method} request coming in for ${req.url}`);
  next();
})

app.get('/', (req, res) => {
  console.log(`${req.body} is the request body on the req for ${req.url}`);
  res.status(200).send(JSON.stringify(attraction));
})

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`)
})
