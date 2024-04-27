document.addEventListener('DOMContentLoaded', function() {
    var usnInput = document.getElementById('usn');
    var emailInput = document.getElementById('email');
  
    usnInput.addEventListener('input', function() {
      var usnValidationMessage = document.getElementById('usnValidationMessage');
      var usnValue = usnInput.value.toUpperCase();
      var regex = /^NNM23[A-Z]{2}\d{3}$/;
  
      if (!regex.test(usnValue)) {
        usnValidationMessage.textContent = 'Enter valid USN.';
        usnValidationMessage.style.color = 'red';
      } else {
        usnValidationMessage.textContent = '';
      }
    });
  
    emailInput.addEventListener('input', function() {
      var emailValidationMessage = document.getElementById('emailValidationMessage');
      var emailValue = emailInput.value;
      var emailRegex = /^(NNM23|nnm23)[A-Za-z]{2}\d{3}@(NMAMIT|nmamit)\.IN$/;
  
      if (!emailRegex.test(emailValue)) {
        emailValidationMessage.textContent = 'Enter valid email format.';
        emailValidationMessage.style.color = 'red';
      } else {
        emailValidationMessage.textContent = '';
      }
    });
  });
  
  function validateForm() {
    var nameInput = document.getElementById("name").value;
    var emailInput = document.getElementById("email").value;
    var usnInput = document.getElementById("usn").value.toUpperCase();
    var usnRegex = /^NNM23[A-Z]{2}\d{3}$/;
    var emailRegex = /^(NNM23|nnm23)[A-Za-z]{2}\d{3}@(NMAMIT|nmamit)\.IN$/;
  
    if (nameInput.trim() === "") {
      alert("Please enter your name.");
      return false;
    } else if (!emailRegex.test(emailInput)) {
      alert("Enter valid email address.");
      return false;
    } else if (!usnRegex.test(usnInput)) {
      alert("Enter valid USN.");
      return false;
    }else if (usnInput === "NNM23CS257") {
      alert("You are not allowed to enter Academic Pal.");
      return false;
    } else {
      return true;
    }
  }
  
  function validateForm() {
    var nameInput = document.getElementById("name").value;
    var emailInput = document.getElementById("email").value;
    var usnInput = document.getElementById("usn").value.toUpperCase();
    var usnRegex = /^NNM23[A-Z]{2}\d{3}$/;
    var emailRegex = /^(NNM23|nnm23)[A-Za-z]{2}\d{3}@(NMAMIT|nmamit)\.IN$/;
  
    if (nameInput.trim() === "") {
      alert("Please enter your name.");
      return false;
    } else if (!emailRegex.test(emailInput)) {
      alert("Enter valid email address.");
      return false;
    } else if (!usnRegex.test(usnInput)) {
      alert("Enter valid USN.");
      return false;
    } else if (usnInput === "NNM23CS257") {
      alert("You are not allowed to enter Academic Pal.");
      return false;
    } else {
      // If all inputs are valid, show a popup message with the user's details
      var userDetails = "Name: " + nameInput + "\nEmail: " + emailInput + "\nUSN: " + usnInput;
      var currentDate = new Date().toLocaleString();
      var message = "Details entered:\n\n" + userDetails + "\n\nEntered on: " + currentDate;
      alert(message);
      alert("Details entered:\n\n" + userDetails);
      return true;
    }
  }
  
  // Inside the input event listeners for the email and USN fields
  if (!regex.test(usnValue)) {
    usnValidationMessage.textContent = 'Enter valid USN.';
    usnValidationMessage.style.color = 'red';
    usnInput.classList.add('shake'); // Add this line
  } else {
    usnValidationMessage.textContent = '';
    usnInput.classList.remove('shake'); // Add this line
  }
  
  // Similarly, for the email field
  if (!emailRegex.test(emailValue)) {
    emailValidationMessage.textContent = 'Enter valid email format.';
    emailValidationMessage.style.color = 'red';
    emailInput.classList.add('shake'); // Add this line
  } else {
    emailValidationMessage.textContent = '';
    emailInput.classList.remove('shake'); // Add this line
  }
  




  function validateForm() {
    var nameInput = document.getElementById("name").value;
    var emailInput = document.getElementById("email").value;
    var usnInput = document.getElementById("usn").value.toUpperCase();
    var usnRegex = /^NNM23[A-Z]{2}\d{3}$/;
    var emailRegex = /^(NNM23|nnm23)[A-Za-z]{2}\d{3}@(NMAMIT|nmamit)\.IN$/;
  
    if (nameInput.trim() === "") {
      alert("Please enter your name.");
      return false;
    } else if (!emailRegex.test(emailInput)) {
      alert("Enter valid email address.");
      return false;
    } else if (!usnRegex.test(usnInput)) {
      alert("Enter valid USN.");
      return false;
    } else if (usnInput === "NNM23CS257") {
      alert("You are not allowed to enter Academic Pal.");
      return false;
    } else {
      // Store user details locally
      var userDetails = {
        name: nameInput,
        email: emailInput,
        usn: usnInput
      };
      localStorage.setItem('userDetails', JSON.stringify(userDetails));
      
      // If all inputs are valid, show a popup message with the user's details
      var currentDate = new Date().toLocaleString();
      var message = "Details entered:\n\nName: " + nameInput + "\nEmail: " + emailInput + "\nUSN: " + usnInput + "\n\nEntered on: " + currentDate;
      alert(message);
      return true;
    }
}



function validateForm() {
  var nameInput = document.getElementById("name");
  var usnInput = document.getElementById("usn");
  var emailInput = document.getElementById("email");
  
  if (!nameInput.checkValidity()) {
    nameInput.classList.add("shake");
    setTimeout(function() {
      nameInput.classList.remove("shake");
    }, 500);
    return false;
  }
  
  if (!usnInput.checkValidity()) {
    usnInput.classList.add("shake");
    setTimeout(function() {
      usnInput.classList.remove("shake");
    }, 500);
    return false;
  }
  
  if (!emailInput.checkValidity()) {
    emailInput.classList.add("shake");
    setTimeout(function() {
      emailInput.classList.remove("shake");
    }, 500);
    return false;
  }
  
  return true;
}
