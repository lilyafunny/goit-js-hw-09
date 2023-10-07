const form = document.querySelector('form');
const fD = document.querySelector('[name="delay"]');
const ds = document.querySelector('[name="step"]');
const amountEl = document.querySelector('[name="amount"]');

form.addEventListener('submit', promise);

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
  return promise;
}

function promise(event) {
  event.preventDefault();

  let del = Number(fD.value);
  let step = Number(ds.value);
  let amount = Number(amountEl.value);

  for (let i = 1; i <= amount; i++) {
    let promDel = del + step * (i - 1);

    createPromise(i, promDel)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}
