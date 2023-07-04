smoothScroll.init({
    speed: 3000, // scrolling speed in milliseconds
    easing: 'easeInOutCubic', // easing function
    offset: 0 // offset from the top of the target element
  });


  document.querySelector('.smooth-scroll').addEventListener('click', function(e) {
    e.preventDefault();
    smoothScroll.animateScroll('#about');
  });


  document.querySelector('.smooth-scroll').addEventListener('click', function(e) {
    e.preventDefault();
    smoothScroll.animateScroll('#services');
  });


  
  document.querySelector('.smooth-scroll').addEventListener('click', function(e) {
    e.preventDefault();
    smoothScroll.animateScroll('#portfolio');
  });

  
  document.querySelector('.smooth-scroll').addEventListener('click', function(e) {
    e.preventDefault();
    smoothScroll.animateScroll('#team');
  });

  document.querySelector('.smooth-scroll').addEventListener('click', function(e) {
    e.preventDefault();
    smoothScroll.animateScroll('#blog');
  });