// server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

app.post('/submit-form', (req, res) => {
  const formData = req.body;
  console.log('Form Data:', formData);
  res.json({ message: 'Form submitted successfully!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
