// App.js

import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    studentID: '',
    universityName: '',
    otherUniversityName: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/submit-form', formData);
      console.log(response.data.message);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4"><b>Form</b>ula</h1>
      <p>Form submission faster than Formula racing</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" required />
        </div>
        <div className="form-group">
          <label htmlFor="mobileNumber">Mobile Number</label>
          <input type="tel" className="form-control" id="mobileNumber" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} placeholder="Enter your mobile number" required />
        </div>
        <div className="form-group">
          <label htmlFor="studentID">Student ID</label>
          <input type="text" className="form-control" id="studentID" name="studentID" value={formData.studentID} onChange={handleChange} placeholder="Enter your student ID" required />
        </div>
        <div className="form-group">
          <label htmlFor="universityName">University Name</label>
          <select className="form-control" id="universityName" name="universityName" value={formData.universityName} onChange={handleChange} required>
            <option value="">Select your university</option>
            <option value="Charotar University of Science and Technology">Charotar University of Science and Technology</option>
            <option value="Other">Other</option>
          </select>
          {formData.universityName === 'Other' && (
            <input type="text" className="form-control mt-2" id="otherUniversityName" name="otherUniversityName" value={formData.otherUniversityName} onChange={handleChange} placeholder="Enter your university name" required />
          )}
          <small id="universityHelp" className="form-text text-muted">Please select your University.</small>
        </div>
        <div className="submit-btn">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
