// script.js

document.addEventListener('DOMContentLoaded', () => {

  // set active nav link based on current path
  const navLinks = document.querySelectorAll('nav a');

  function setActiveFromPath() {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(a => {
      const href = a.getAttribute('href');
      // normalize index paths
      if (href === path || (href === 'index.html' && path === '')) {
        a.classList.add('active');
      } else {
        a.classList.remove('active');
      }
    });
  }

  setActiveFromPath();

  // add click handler to mark active (useful for same-page anchors)
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

});
