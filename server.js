// server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

// POST endpoint to handle form submissions
app.post('/submit-form', (req, res) => {
  const formData = req.body;
  console.log('Form Data:', formData);
  
  // Read existing data from data.json file
  let jsonData = [];
  try {
    const data = fs.readFileSync('data.json', 'utf8');
    jsonData = JSON.parse(data);
  } catch (err) {
    console.error('Error reading data.json file:', err);
  }

  // Append new form data to jsonData array
  jsonData.push(formData);

  // Write updated data back to data.json file
  fs.writeFile('data.json', JSON.stringify(jsonData, null, 2), (err) => {
    if (err) {
      console.error('Error writing to data.json file:', err);
      res.status(500).json({ message: 'Failed to submit form' });
    } else {
      console.log('Form data submitted successfully');
      res.json({ message: 'Form submitted successfully' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
