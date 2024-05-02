const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/submit-form', (req, res) => {
  console.log('Form submitted:', req.body);
  res.send('Form submitted successfully!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
