$('.card_slide_carousel').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  sped:300,
  autoplay: true,
  autoplaySpeed: 2500,
  
});
				


// $('.card_slide_carousel').slick({
//   dots: true,
//   infinite: true,
//   speed: 300,
//   slidesToShow: 4,
//   slidesToScroll: 2,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//     // You can unslick at a given breakpoint now by adding:
//     // settings: "unslick"
//     // instead of a settings object
//   ]
// });


// function parallax() {
//   window.onscroll = function() {
//     let speed = 5.0;
//     document.getElementById("bg-image").style.backgroundPosition = (-window.pageXOffset/speed)+"px ";
//   }
// }

// parallax();