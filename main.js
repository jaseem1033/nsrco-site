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
          top: el.offsetTop - 70,
          behavior: 'smooth',
        });
      }
    }
  });
});

