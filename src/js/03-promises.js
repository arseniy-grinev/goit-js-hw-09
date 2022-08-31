import Notiflix from 'notiflix';

const inputDelay = document.querySelector('[name="delay"]');
const inputStep = document.querySelector('[name="step"]');
const inputAmount = document.querySelector('[name="amount"]');
const form = document.querySelector('.form');

// console.log(inputDelay);
// console.log(inputStep);
// console.log(inputAmount);
// console.log(form);

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const delay = Number(inputDelay.value);
  const step = Number(inputStep.value);
  const amount = Number(inputAmount.value);
  // console.log(delay, step, amount);

  
  for (let i = 1; i <= amount; i += 1) {
    const promiseDelay = delay + (i - 1) * step;
    createPromise(i, promiseDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`, {
            timeout: 3000 + delay
          });
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`, {
            timeout: 3000 + delay
          });
      });
  }
}




function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
