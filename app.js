const timeEl = document.getElementById('current-time');
const favoriteBtn = document.querySelector('.favorite-button');
const filterButtons = document.querySelectorAll('.filter-pill');
const dayButtons = document.querySelectorAll('.day-btn');

function updateTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  timeEl.textContent = `${hours}:${minutes}`;
}

updateTime();
setInterval(updateTime, 30000);

favoriteBtn.addEventListener('click', () => {
  favoriteBtn.classList.toggle('is-active');
  favoriteBtn.textContent = favoriteBtn.classList.contains('is-active') ? '♥' : '♡';
});

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.classList.contains('nav-pill')) return;
    filterButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
  });
});

dayButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.classList.contains('is-muted')) return;
    dayButtons.forEach((btn) => btn.classList.remove('is-active'));
    button.classList.add('is-active');
  });
});
