console.log("hello world");

// $(document).ready(function() {
//     $('#nav-control').on('click', function() {
//       $('#nav-control').toggleClass('open');
//       $('#site-body').toggleClass('mainClose');
//       $('#nav').toggleClass('navClose');
//     });
//   });

$(document).ready(function() {
    $('.toggle-button').on('click', function() {
      $('.mobile-nav-container').toggleClass('open');
      $('.toggle-button').toggleClass('close');
      //$('#nav').toggleClass('navClose');
    });
  });