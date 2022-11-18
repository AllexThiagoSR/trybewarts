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
      strinToReturn += ' ' + inputs[i].value + ',';
    }
  }
  return strinToReturn.substring(0, strinToReturn.length - 1);
};

const addChild = (tag, parent, ...strings) => {
  // console.log(tag, parent, strings);
  for (let i = 0; i < strings.length; i += 1) {
    const p = document.createElement(tag);
    p.innerText = strings[i];
    parent.appendChild(p);
  }
};

const elementToReplace = (event) => {
  event.preventDefault();
  const formData = document.getElementById('form-data');
  const firstName = document.getElementById('input-name').value;
  const lastName = document.getElementById('input-lastname').value;
  const fullName = 'Nome: ' + firstName + ' ' + lastName;
  const email = 'Email: ' + document.getElementById('input-email').value;
  const house = 'Casa: ' + document.getElementById('house').value;
  const family = 'Família: ' + getCheckedInputValue('#family-container label input');
  const learn = 'Matérias:' + getCheckedValues('#toLearn label input');
  const rate = 'Avaliação: ' + getCheckedInputValue('#label-rate input');
  const textArea = 'Observações: ' + document.getElementById('textarea').value;

  formData.style.display = 'flex';
  formData.innerHTML = '';
  addChild('p', formData, fullName, email, house, family, learn, rate, textArea);
};

loginButton.addEventListener('click', () => {
  // event.preventDefault();
  validate('tryber@teste.com', '123456');
});

submitBtn.addEventListener('click', (event) => {
  const formEvaluation = document.getElementById('evaluation-form');
  formEvaluation.style.display = 'none';
  elementToReplace(event);
});

agreementTerms.addEventListener('change', checkTerms);

textArea.addEventListener('keyup', countCharacters);

textArea.addEventListener('keydown', countCharacters);

checkTerms();
