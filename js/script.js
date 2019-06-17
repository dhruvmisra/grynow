let testimonials = document.getElementsByClassName('testimonial');

for (let i = 0; i < testimonials.length; i++) {
  testimonials[i].addEventListener('click', changeTestimonial);
  testimonials[i].addEventListener('mouseover', stopSlideshow);
  testimonials[i].addEventListener('mouseleave', startSlideshow);
}

let left, current, right, slideshow;

function startSlideshow() {
  slideshow = setInterval(() => {
    left = document.querySelector('.t-left');
    right = document.querySelector('.t-right');
    current = document.querySelector('.t-current');

    left.classList.add('t-left-current')
    setTimeout(() => {
      left.classList.remove('t-left-current');
    }, 500);

    left.classList.add('t-current');
    left.classList.remove('t-left');

    current.classList.add('t-current-right')
    setTimeout(() => {
      current.classList.remove('t-current-right');
    }, 500);


    current.classList.add('t-right');
    current.classList.remove('t-current');

    right.classList.add('t-right-left')
    setTimeout(() => {
      right.classList.remove('t-right-left');
    }, 500);

    right.classList.add('t-left');
    right.classList.remove('t-right');
  }, 4000)
} startSlideshow();

function stopSlideshow() {
  clearInterval(slideshow);
}

function changeTestimonial() {
  // Select the testimonial clicked
  let test = event.currentTarget;
  if (test.classList.contains('t-current')) {
    return;
  }
  else if (test.classList.contains('t-left')) {
    current = document.querySelector('.t-current');
    right = document.querySelector('.t-right');

    test.classList.add('t-left-current')
    setTimeout(() => {
      test.classList.remove('t-left-current');
    }, 500);

    test.classList.add('t-current');
    test.classList.remove('t-left');

    current.classList.add('t-current-right')
    setTimeout(() => {
      current.classList.remove('t-current-right');
    }, 500);


    current.classList.add('t-right');
    current.classList.remove('t-current');

    right.classList.add('t-right-left')
    setTimeout(() => {
      right.classList.remove('t-right-left');
    }, 500);

    right.classList.add('t-left');
    right.classList.remove('t-right');
  }
  else {
    current = document.querySelector('.t-current');
    left = document.querySelector('.t-left');

    test.classList.add('t-right-current')
    setTimeout(() => {
      test.classList.remove('t-right-current');
    }, 500);

    test.classList.add('t-current');
    test.classList.remove('t-right');

    current.classList.add('t-current-left')
    setTimeout(() => {
      current.classList.remove('t-current-left');
    }, 500);

    current.classList.add('t-left');
    current.classList.remove('t-current');

    left.classList.add('t-left-right')
    setTimeout(() => {
      left.classList.remove('t-left-right');
    }, 500);

    left.classList.remove('t-left');
    left.classList.add('t-right');
  }
}

let width;

window.addEventListener('scroll', () => {
  parallax();
});
window.addEventListener('resize', () => {
  updateWidth();
});

function updateWidth() {
  width = window.innerWidth;
  parallax();
}

function parallax() {
  let oart1 = document.getElementById('art-1');
  //let art2 = document.getElementById('art-2');

  let tiltArt1 = document.getElementById('tilt-art-1');
  let tiltArt2 = document.getElementById('tilt-art-2');

  let newPos = 0 - window.pageYOffset/3;

  oart1.getBoundingClientRect().top;

  oart1.style.top = 100 + newPos + 'px';
  //art2.style.top = 0 + newPos + 'px';



  let top = 100;
  width = window.innerWidth;
  if(width < 1024) {
    width = 0;
    top = 300;
  }

  tiltArt1.style.left = 0 - newPos/5 + 'px';
  tiltArt1.style.top = top + newPos/5 + 'px';
}

$(document).ready(function(){
  $('.slick').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 300,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false
        }
      }]
  });
});