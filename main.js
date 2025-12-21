// Handle nav hide/show on scroll
const nav = document.querySelector('.top-nav');
let lastScrollY = window.scrollY;

const handleScroll = () => {
  const currentY = window.scrollY;
  const isScrollingDown = currentY > lastScrollY && currentY > 80;

  if (isScrollingDown) {
    nav.classList.add('nav-hidden');
  } else {
    nav.classList.remove('nav-hidden');
  }

  lastScrollY = currentY;
};

window.addEventListener('scroll', handleScroll);

// Smooth scroll for in-page links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    const targetId = anchor.getAttribute('href');
    if (targetId.length > 1) {
      const el = document.querySelector(targetId);
      if (el) {
        e.preventDefault();
        window.scrollTo({
          top: el.offsetTop,
          behavior: 'smooth',
        });
      }
    }
  });
});

// Number Counter Animation
const counters = document.querySelectorAll('.counter');
const speed = 200; // The lower the slower

const animateCounters = () => {
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      
      // Lower inc to slow and higher to slow
      const inc = target / speed;

      if (count < target) {
        // Add inc to count and output in counter
        counter.innerText = Math.ceil(count + inc);
        // Call function every ms
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });
};

// Intersection Observer for triggering animation
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5 // Trigger when 50% of the section is visible
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounters();
      observer.unobserve(entry.target); // Only animate once
    }
  });
}, observerOptions);

const achievementsSection = document.querySelector('#achievements');
if (achievementsSection) {
  observer.observe(achievementsSection);
}

