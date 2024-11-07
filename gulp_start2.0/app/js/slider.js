

const swiper = new Swiper('.swiper', {
   // Optional parameters
   autoplay: {
      delay: 5000,
    }, 
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
   loop: true,
 
   // If we need pagination
   pagination: {
     el: '.swiper-pagination',
   },
 
   // Navigation arrows
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
 
   // And if we need scrollbar
   scrollbar: {
     el: '.swiper-scrollbar',
   },
 });