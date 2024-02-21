 ScrollReveal ({
  reset: true ,
  distance: '60px',
  origin: 'bottom',
  duration:2500,
  delay: 400
});

ScrollReveal().reveal('.profildescription,#expertise,#portfolio,#contact',{delay: 500});
ScrollReveal().reveal('.photo',{delay: 500, origin: 'right'});
ScrollReveal().reveal('.progress-bar',{delay: 500, origin: 'left'});