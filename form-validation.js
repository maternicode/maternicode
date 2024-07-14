// JavaScript code for form validation and submission

const emailInput = document.getElementById('email-form02-6'); // Replace with actual ID of the email input field

emailInput.addEventListener('input', function() {
  const emailValue = this.value.trim();
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (emailRegex.test(emailValue)) {
    // Email is valid
    emailInput.classList.remove('is-invalid');
    emailInput.classList.add('is-valid');
  } else {
    // Email is invalid
    emailInput.classList.remove('is-valid');
    emailInput.classList.add('is-invalid');
  }
});

// Add JavaScript code for form submission and email sending (replace with your actual logic)
const form = document.querySelector('form');

form.addEventListener('submit', function)

