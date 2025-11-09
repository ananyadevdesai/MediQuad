// Mobile nav toggle and small helpers
(function () {
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('#navToggle');
  const links = document.querySelector('.nav-links');
  if (!toggle || !nav || !links) return;
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
})();
