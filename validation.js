const form = document.querySelector('form');
const emailInput = document.querySelector("input[name='email']");
const errorMessage = document.querySelector('.error-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailValue = emailInput.value;