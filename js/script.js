// 'use strict';

// ======BURGER====
$(document).ready(function () {
   $('.header__burger').click(function (event) {
      $('.header__burger,.header__menu').toggleClass('active');
      $('body').toggleClass('lock');
   });
});
//====SLIDER======
const prev = document.getElementById('btn-prev'),
   next = document.getElementById('btn-next'),
   slides = document.querySelectorAll('.slide'),
   dots = document.querySelectorAll('.dot'),
   slideWrapper = document.querySelectorAll('.slider-wrapper');

let index = 0;

let activeSlide = n => {
   for (slide of slides) {
      slide.classList.remove('active-slide');
   }
   slides[n].classList.add('active-slide');
}
let activeDot = n => {
   for (dot of dots) {
      dot.classList.remove('active-Dot');
   }
   dots[n].classList.add('active-Dot');
}
let prepareCarrentSlide = ind => {
   activeSlide(ind);
   activeDot(ind);
}

let nextSlide = () => {
   if (index == slides.length - 1) {
      index = 0;
      prepareCarrentSlide(index);
   } else {
      index++;
      prepareCarrentSlide(index);
   }
}
let prevSlide = () => {
   if (index == 0) {
      index = slides.length - 1;
      prepareCarrentSlide(index);
   } else {
      index--;
      prepareCarrentSlide(index);
   }
}

dots.forEach((item, indexDot) => {
   item.addEventListener('click', () => {
      index = indexDot;
      prepareCarrentSlide(index);
   })
})
next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);
// //=========================================
