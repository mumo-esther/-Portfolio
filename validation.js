const form = document.querySelector('form');
const emailInput = document.querySelector("input[name='email']");

const errorMessage = document.querySelector('.error-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailValue = emailInput.value;

  if (emailValue.toLowerCase() === emailValue) {
    form.submit();
  } else {
    errorMessage.innerHTML = 'Email must be in lowercase.';
    errorMessage.style.display = 'block';
  }
});

// preserve data in the browser
const forms = document.querySelector('form');
const inputs = form.querySelectorAll('input');
const data = JSON.parse(localStorage.getItem('formData')) || {};

inputs.forEach((input) => {
  const inputName = input.getAttribute('name');
  if (data[inputName]) {
    input.value = data[inputName];
  }
});
forms.addEventListener('input', (e) => {
  const input = e.target;
  const inputName = input.getAttribute('name');
  data[inputName] = input.value;
  localStorage.setItem('formData', JSON.stringify(data));
});