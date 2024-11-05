// Get the form element
const form = document.getElementById("myForm");

// Get the email input and error/success messages
const email = document.getElementById("email");
const error = document.getElementById("error");
const success = document.getElementById("success");


// Adds an event "submit" to my form element
form.addEventListener("submit", (e) => {
  let messages = [];
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Clear previous messages
  error.innerText = "";
  // Hide success message initially
  success.style.display = "none";
  // Checks if the value of my input is empty or null
  if (email.value === "" || email.value == null) {
    messages.push("Please provide a valid email address");
  } else if (!emailRegex.test(email.value)) {
    messages.push("Please provide a valid email address");
  }
  if (messages.length > 0) {
    e.preventDefault();
    error.innerText = messages.join(", ");
    email.classList.add("error-message");
    // Style's the input border to red
    email.style.border = "1px solid red";
  } else {
    e.preventDefault();
    // Set success message
    success.innerText = "Email sent";
    // Show success message
    success.style.display = "block";
    // Style's the input border to green
    email.style.border = "1px solid green";
    // Remove error state
    email.classList.remove("error-state");
  }
});
