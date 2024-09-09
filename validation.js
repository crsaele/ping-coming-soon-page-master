// Get the form element
const form = document.getElementById("myForm");

// Get the email input and error message
const email = document.getElementById("email");
const error = document.getElementById("error-state");
const value = email.value.trim();

// Function that validates the form 
function validation() {
  // Regex to look for an email validation pattern
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // If the input type email is left with no text in it
  if (email === "") {
    email.classList.toggle("error-state");
    error.textContent = "Whoops! It looks like you forgot to add your email";
    return;
  }

  // If the regex doesn't match meaning the email pattern is wrong
  if (!emailPattern.test(value)) {
    email.textContent = "Please provide a valid email address";
    return;
  }

  // Console log's and alerts the success state
  alert("Email submitted successfully!");
  console.log("Email submitted successfully!");
}

// Adds the submit event to the form and run's the validation function
form.addEventListener("submit", function (event) {
  // Prevent form submission
  event.preventDefault();
  validation();
});
