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

// Image lightbox
(function () {
  // Create lightbox element
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML = '<span class="lightbox-close">&times;</span><img src="" alt="">';
  document.body.appendChild(lightbox);

  const lightboxImg = lightbox.querySelector('img');
  const closeBtn = lightbox.querySelector('.lightbox-close');

  // Get all images in sections, cards, and gallery
  const images = document.querySelectorAll('section img, .card img, .gallery img');

  // Add click handlers to all images
  images.forEach(img => {
    img.addEventListener('click', (e) => {
      e.stopPropagation();
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  // Close lightbox when clicking background or close button
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target === closeBtn) {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  // Close lightbox with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
})();
