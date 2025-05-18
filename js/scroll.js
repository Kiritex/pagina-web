document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.scroll-img');
  
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.7 // Ajusta este valor según sea necesario
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          entry.target.classList.remove('active');
        }
      });
    }, observerOptions);
  
    images.forEach(img => {
      observer.observe(img);
    });
  });