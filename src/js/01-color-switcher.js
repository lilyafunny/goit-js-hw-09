const refs = {
  btStartEl: document.querySelector('button[data-start]'),
  btStopEl: document.querySelector('button[data-stop]'),
  bodyEl: document.querySelector('body'),
};

refs.btStartEl.addEventListener('click', handlClickStart);
refs.btStopEl.addEventListener('click', handlClickStop);

function handlClickStart() {
  refs.btStartEl.setAttribute('disabled', '');

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

  timerId = setInterval(() => {
    refs.bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function handlClickStop() {
  clearInterval(timerId);
  refs.btStartEl.removeAttribute('disabled');
}
