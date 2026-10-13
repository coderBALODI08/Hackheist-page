/**
 * HACKHEIST 2026 - GDG ON CAMPUS MIET
 * Core Frontend Interactions & Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initCountdown();
  initActiveNavSpy();
  initCardInteractions();
  initConsoleEasterEgg();
});

/**
 * Navbar scroll blur & mobile drawer toggle
 */
function initNavbar() {
  const header = document.getElementById('navbar');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');

  // Sticky header on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });

  // Mobile menu toggle
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('active');
      mobileMenuBtn.setAttribute('aria-expanded', isOpen);

      // Hamburger animation
      const bars = mobileMenuBtn.querySelectorAll('.bar');
      if (isOpen) {
        bars[0].style.transform = 'translateY(7px) rotate(45deg)';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'translateY(-7px) rotate(-45deg)';
      } else {
        bars[0].style.transform = 'none';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'none';
      }
    });

    // Close menu when clicking any nav item
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
          mobileMenuBtn.setAttribute('aria-expanded', 'false');
          const bars = mobileMenuBtn.querySelectorAll('.bar');
          bars[0].style.transform = 'none';
          bars[1].style.opacity = '1';
          bars[2].style.transform = 'none';
        }
      });
    });
  }
}

/**
 * Live Countdown Timer until HackHeist 2026
 */
function initCountdown() {
  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minsEl = document.getElementById('minutes');
  const secsEl = document.getElementById('seconds');

  if (!daysEl || !hoursEl || !minsEl || !secsEl) return;

  // Target event date: HackHeist 2026 (e.g. November 10, 2026 09:00 AM)
  const targetDate = new Date('2026-11-10T09:00:00+05:30').getTime();

  function updateTimer() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      daysEl.textContent = '00';
      hoursEl.textContent = '00';
      minsEl.textContent = '00';
      secsEl.textContent = '00';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minsEl.textContent = String(minutes).padStart(2, '0');
    secsEl.textContent = String(seconds).padStart(2, '0');
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

/**
 * Scrollspy for active navigation links
 */
function initActiveNavSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-links .nav-item');

  if (!sections.length || !navItems.length) return;

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href') === `#${current}`) {
        item.classList.add('active');
      }
    });
  }, { passive: true });
}

/**
 * Subtle 3D Card Hover & Lighting effects on highlights
 */
function initCardInteractions() {
  const cards = document.querySelectorAll('.highlight-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
    });
  });
}

/**
 * Developer console Easter egg
 */
function initConsoleEasterEgg() {
  console.log(
    `%c HACKHEIST 2026 %c GDG on Campus MIET `,
    'background: #4285F4; color: white; font-weight: bold; padding: 4px 8px; border-radius: 4px 0 0 4px;',
    'background: #34A853; color: white; font-weight: bold; padding: 4px 8px; border-radius: 0 4px 4px 0;'
  );
  console.log(
    '%cBuild. Break. Solve. Welcome to HackHeist! Ready to pull off the ultimate hack?',
    'color: #FBBC05; font-size: 12px; font-weight: 500;'
  );
}
