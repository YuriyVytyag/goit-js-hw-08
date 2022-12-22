import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  input: document.querySelector('.feedback-form input'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormDataInput, 500));
outputTextarea();

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.target.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onFormDataInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function outputTextarea() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  const currentEmail = refs.input;
  const currentMessage = refs.textarea;
  console.log(savedMessage);
  if (savedMessage) {
    currentEmail.value = savedMessage.email || '';
    currentMessage.value = savedMessage.message || '';
  }
}
