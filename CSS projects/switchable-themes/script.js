const body = document.querySelector('body');
const dayBtn = document.querySelector('#day-btn');
const nightBtn = document.querySelector('#night-btn');

dayBtn.addEventListener('click', () => {
  body.classList.remove('theme-night');
  body.classList.add('theme-day');
});

nightBtn.addEventListener('click', () => {
  body.classList.remove('theme-day');
  body.classList.add('theme-night');
});
