const loginButton = document.getElementById('login');

const validate = (email, password) => {
  const emailInput = document.getElementById('email-input');
  const passwordInput = document.getElementById('password-input');

  if (email=== emailInput.value && password === passwordInput.value) {
    alert('Olá, Tryber!')
    emailInput.value = '';
    passwordInput.value = '';
  } else {
    alert('Email ou senha inválidos.');
  }
};

loginButton.addEventListener('click', (event) => {
  event.preventDefault();
  validate('tryber@teste.com', '123456');
});
