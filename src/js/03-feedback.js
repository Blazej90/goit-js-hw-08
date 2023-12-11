import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageInput = feedbackForm.querySelector('textarea[name="message"]');

const LOCAL_STORAGE_KEY = 'feedback-form-state';

const saveStateToLocalStorage = () => {
  const state = {
    email: emailInput.value,
    message: messageInput.value,
  };

  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
};

const loadStateFromLocalStorage = () => {
  const savedState = localStorage.getItem(LOCAL_STORAGE_KEY);

  if (savedState) {
    const parsedState = JSON.parse(savedState);
    emailInput.value = parsedState.email;
    messageInput.value = parsedState.message;
  }
};

const clearStateFromLocalStorage = () => {
  localStorage.removeItem(LOCAL_STORAGE_KEY);
};

const handleSubmit = event => {
  event.preventDefault();

  console.log('Form submitted with state:', {
    email: emailInput.value,
    message: messageInput.value,
  });

  emailInput.value = '';
  messageInput.value = '';
  clearStateFromLocalStorage();
};

feedbackForm.addEventListener('input', throttle(saveStateToLocalStorage, 500));
window.addEventListener('load', loadStateFromLocalStorage);
feedbackForm.addEventListener('submit', handleSubmit);
