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

const countCharacters = (event) => {
  const keyPressed = event.key.toLowerCase();
  const acceptKeys = 'abcdefghijklmnopqrstuvwxyz1234567890';
  let count = Number(spanCounter.innerText);

  if (keyPressed === 'backspace' && count < 500 && textArea.value !== '') {
    count += 1;
  } else if (keyPressed !== 'backspace' && acceptKeys.includes(keyPressed)) {
    count -= 1;
  }
  spanCounter.innerText = String(count);
};

loginButton.addEventListener('click', (event) => {
  event.preventDefault();
  validate('tryber@teste.com', '123456');
});

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
});

agreementTerms.addEventListener('change', checkTerms);

textArea.addEventListener('keydown', countCharacters);

checkTerms();
