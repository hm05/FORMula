# Formula
Form submission faster than Formula racing

## Description
**Form**ula is a nodejs web application which is used for form submissions. This concept is similar to google forms. The technologies used to make this web application are HTML5, CSS3, Bootstrap, JavaScript and NodeJS. I hope you find this repository informative.

## Installation
Here is the step by step installation process of this project
1. Cloning the repository
```
git clone https://github.com/hm05/Formula.git && cd ./Formula
```
2. Verifying NodeJS on local system
> [!IMPORTANT]
> This project uses NodeJS as back-end so its crutial to have NodeJS installed on your local system

To check for NodeJS use the below command, if you have Node already installed the command will return with the version of the Node but if you don't have Node then it will return with node command unidentified or similar error.
```
node version
```

3. Installing dependencies
> [!TIP]
> I have already included node modules in the repository but it is advisable to install the dependencies

Run the below command to install the dependencies
```
npm install express body-parser cors
```

4. Running the Back-End
```
node server.js
```
After running the backend server your application is ready to run but please use different port for front-end

5. Running the Front-End
>[!TIP]
> I would recommend you to use [Live Server Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) if you are using Visual Studio Code as this extension uses 5500 port to host Front-End

6. Accessing the Web-Application
Now as you have also set-up the Web Application you can access the application through [localhost](http://127.0.0.1:5500/index.html)
```
http://127.0.0.1:5500/index.html
```

## Explaination
- Here we will understand the working of code in the flow of data
### [Index Page](index.html)
- Here I won't go much deeper into the structure and styling of the page but rather we will focus on the frameworks and functions used in html

Here I have used bootstrap framework for styling which can be understood by the following lines of code
```
<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
```
```
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
```

Then we can understand that I am using JQuery AJAX for the transfer of data from the below code
```
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
```

Now let us understand the working of the submit button
```
<div class="submit-btn">
        <button type="button" class="btn btn-primary" onclick="submitForm()">Submit</button>
</div>
```

Here we are calling a function called "submitForm()" on clicking the button from [main.js](scripts/main.js) file.

### [Main JavaScript File](scripts/main.js)
- Here let us understand the submitForm() function
```
function submitForm() {
  const name = document.getElementById("exampleInputName").value;
  const mobile = document.getElementById("exampleInputMobile").value;
  const studentID = document.getElementById("exampleInputStudentID").value;
  const university = document.getElementById("exampleInputUniversity").value;
  const otherUniversity = document.getElementById("otherUniversityInput").value;

  const formData = {
    name,
    mobile,
    studentID,
    university: university === "Other" ? otherUniversity : university
  };

  // Send form data to the server
  $.ajax({
    url: "http://localhost:3000/submit-form",
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify(formData),
    success: function(response) {
      console.log("Form submitted successfully:", response);
      // Optionally, display a success message to the user
    },
    error: function(xhr, status, error) {
      console.error("Failed to submit form:", error);
      // Optionally, display an error message to the user
    }
  });
}
```
From this can understand that this function is using a POST method to send data to server.js on port 3000 using AJAX and on successful submission of form this function is responding "Form submitted successfully" in the console logs. And on error it is responding with "Failed to submit form" in console log.

### [Server JavaScript File](server.js)
- Here let us understand how the [server.js](server.js) file stores data in [data.json](data.json) file
```
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
```

From the above code we can understand that 
