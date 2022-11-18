const loginButton = document.getElementById('login');
const submitBtn = document.getElementById('submit-btn');
const agreementTerms = document.getElementById('agreement');
const textArea = document.querySelector('textarea');
const spanCounter = document.getElementById('counter');

const validate = (email, password) => {
  const emailInput = document.getElementById('email-input');
  const passwordInput = document.getElementById('password-input');

  if (email === emailInput.value && password === passwordInput.value) {
    alert('Olá, Tryber!');
    emailInput.value = '';
    passwordInput.value = '';
  } else {
    alert('Email ou senha inválidos.');
  }
};

const checkTerms = () => {
  if (agreementTerms.checked === true) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
};

const countCharacters = () => {
  spanCounter.innerText = textArea.maxLength - textArea.value.length;
};

loginButton.addEventListener('click', (event) => {
  event.preventDefault();
  validate('tryber@teste.com', '123456');
});

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
});

agreementTerms.addEventListener('change', checkTerms);

textArea.addEventListener('keyup', countCharacters);

textArea.addEventListener('keydown', countCharacters);

checkTerms();
