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
