const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

if (menuToggle && menu) {
  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('open');
  });

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => menu.classList.remove('open'));
  });
}

const counters = document.querySelectorAll('.counter');

const animateCounters = () => {
  counters.forEach(counter => {
    const target = Number(counter.getAttribute('data-target'));
    const duration = 1800;
    const stepTime = 20;
    const totalSteps = duration / stepTime;
    const increment = target / totalSteps;
    let current = 0;

    const updateCounter = () => {
      current += increment;

      if (current < target) {
        counter.textContent = '+' + Math.floor(current);
        setTimeout(updateCounter, stepTime);
      } else {
        counter.textContent = '+' + target;
      }
    };

    updateCounter();
  });
};

const statsSection = document.querySelector('.premium-stats');

if (statsSection) {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        observer.unobserve(statsSection);
      }
    });
  }, { threshold: 0.35 });

  observer.observe(statsSection);
}
