$(document).ready(function () {
   $('.spoiler-item').click(function (event) {
      if ($('.accordion').hasClass('accordion-item')) {
         $('.spoiler-item').not($(this)).removeClass('spoiler-active');
      }
   });
});

let spoiler = document.querySelector('.spoiler-item');
spoiler.addEventListener('click', () => spoiler.classList.toggle('spoiler-active'));


if (window.screen.width <= 457) {
   let menu = document.querySelector('.menu-right');
   menu.id = 'head';
   menu.classList.add('collapse')
}

