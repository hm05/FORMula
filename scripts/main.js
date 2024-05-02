function checkOther() {
    var selectBox = document.getElementById("exampleInputUniversity");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    var otherUniversityInput = document.getElementById("otherUniversityInput");
    if (selectedValue === "Other") {
      otherUniversityInput.classList.remove("d-none");
    } else {
      otherUniversityInput.classList.add("d-none");
    }
  }