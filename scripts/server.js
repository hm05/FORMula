// server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

// POST endpoint to handle form submissions
app.post('/submit-form', (req, res) => {
  const formData = req.body;
  console.log('Form Data:', formData);
  // You can handle the form data here (e.g., save it to a database)
  res.json({ message: 'Form submitted successfully!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
