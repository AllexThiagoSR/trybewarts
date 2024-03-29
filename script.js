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

const getCheckedInputValue = (selector) => {
  const inputs = document.querySelectorAll(selector);

  for (let i = 0; i < inputs.length; i += 1) {
    if (inputs[i].type === 'radio' && inputs[i].checked) {
      return inputs[i].value;
    }
  }
};

const getCheckedValues = (selector) => {
  const inputs = document.querySelectorAll(selector);
  let strinToReturn = '';

  for (let i = 0; i < inputs.length; i += 1) {
    if (inputs[i].checked && inputs[i].type === 'checkbox') {
      strinToReturn += ` ${inputs[i].value},`;
    }
  }
  return strinToReturn.substring(0, strinToReturn.length - 1);
};

const validadeInput = (inputValue) => {
  const campo = inputValue.split(':')[0];
  const value = inputValue.split(':')[1];
  const hasLetters = value.match(/[a-z]|[1-9]/gi);

  if (hasLetters === null || value === ' undefined') {
    console.log(campo, value);
    return [false, campo];
  }
  return [true];
};

const addChild = (tag, parent, ...strings) => {
  const formEvaluation = document.getElementById('evaluation-form');

  for (let i = 0; i < strings.length; i += 1) {
    const validation = validadeInput(strings[i]);
    if (!validation[0]) {
      alert(`O campo de ${validation[1]} não foi preenchido!`);
      return;
    }
    const p = document.createElement(tag);
    p.innerText = strings[i];
    parent.appendChild(p);
  }
  parent.style.setProperty('display', 'flex');
  formEvaluation.style.display = 'none';
};

const elementToReplace = () => {
  const formData = document.getElementById('form-data');
  const firstName = document.getElementById('input-name').value;
  const lastName = document.getElementById('input-lastname').value;
  const fullName = `Nome: ${firstName} ${lastName}`;
  const email = `Email: ${document.getElementById('input-email').value}`;
  const house = `Casa: ${document.getElementById('house').value}`;
  const family = `Família: ${getCheckedInputValue('#family-container label input')}`;
  const learn = `Matérias:${getCheckedValues('#toLearn label input')}`;
  const rate = `Avaliação: ${getCheckedInputValue('#label-rate input')}`;
  const textAreaValue = `Observações: ${document.getElementById('textarea').value}`;

  formData.innerHTML = '';
  addChild('p', formData, fullName, email, house, family, learn, rate, textAreaValue);
};

loginButton.addEventListener('click', () => {
  validate('tryber@teste.com', '123456');
});

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  elementToReplace();
});

agreementTerms.addEventListener('change', checkTerms);

textArea.addEventListener('keyup', countCharacters);

textArea.addEventListener('keydown', countCharacters);

checkTerms();
