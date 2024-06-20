const formData = { email: '', message: '' };
const lc_key = 'feedback-form-state';

const formEl = document.querySelector('.feedback-form');
const feedbackEmail = document.querySelector('.feedback-form input');
const feedbackMessage = document.querySelector('.feedback-form textarea');
formEl.addEventListener('input', fillingOutLS);

function fillingOutLS(evt) {
  let inputEl = evt.target;
  if (inputEl.name === 'email') {
    formData.email = evt.target.value;
  } else if (inputEl.name === 'message') {
    formData.message = evt.target.value;
  } else {
    return;
  }
  localStorage.setItem(lc_key, JSON.stringify(formData));
}

function fillingFormData(evt) {
  const savedForm = localStorage.getItem(lc_key);

  if (savedForm) {
    feedbackEmail.value = JSON.parse(savedForm).email;
    feedbackMessage.value = JSON.parse(savedForm).message;
  }
}
fillingFormData();

formEl.addEventListener('submit', feedbackFormSubmit);

function feedbackFormSubmit(evt) {
  const { email, message } = evt.currentTarget.elements;

  if (email.value === '' || message.value === '') {
    alert('Fill please all fields');
  } else {
    console.log(JSON.parse(localStorage.getItem(lc_key)));
  }

  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(lc_key);
}
