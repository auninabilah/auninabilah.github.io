const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

const filters = document.querySelectorAll('.filter');
const skillCards = document.querySelectorAll('.skill-card');

filters.forEach(filter => {
  filter.addEventListener('click', () => {
    filters.forEach(btn => btn.classList.remove('active'));
    filter.classList.add('active');

    const selected = filter.dataset.filter;
    skillCards.forEach(card => {
      card.classList.toggle('hide', selected !== 'all' && card.dataset.category !== selected);
    });
  });
});

const phrases = [
  'Computer Engineering Graduate',
  'IoT Enthusiast',
  'Embedded Systems Learner',
  'Hardware + Software Integrator'
];

let phraseIndex = 0;
const typed = document.getElementById('typed');

setInterval(() => {
  phraseIndex = (phraseIndex + 1) % phrases.length;
  typed.style.opacity = '0';
  setTimeout(() => {
    typed.textContent = phrases[phraseIndex];
    typed.style.opacity = '1';
  }, 180);
}, 2600);
