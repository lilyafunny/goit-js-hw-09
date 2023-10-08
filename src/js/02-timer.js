import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const btStartEl = document.querySelector('button[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');
const inputEl = document.querySelector('#datetime-picker');
let timerId = null;
let selectedDate = null;

btStartEl.addEventListener('click', handlClickStart);
btStartEl.setAttribute('disabled', '');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    console.log(options.defaultDate);
    if (selectedDates[0] < options.defaultDate) {
      window.alert('Please choose a date in the future');
    } else {
      btStartEl.removeAttribute('disabled');
      selectedDate = selectedDates[0].getTime();
    }
  },
};

flatpickr(inputEl, options);

function handlClickStart() {
  timerId = setInterval(() => {
    currentDate = Date.now();
    const timer = selectedDate - currentDate;
    if (timer <= 0) {
      clearInterval(timerId);
    } else {
      updateTimer(convertMs(timer));
    }
  }, 1000);
}

function updateTimer({ days, hours, minutes, seconds }) {
  daysEl.textContent = `${days}`;
  hoursEl.textContent = `${hours}`;
  minutesEl.textContent = `${minutes}`;
  secondsEl.textContent = `${seconds}`;
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
