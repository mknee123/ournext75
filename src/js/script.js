console.log("hello world");

$(document).ready(function() {
    


    $('#nav-control').on('click', function() {
      $('#nav-control').toggleClass('open');
      $('#site-body').toggleClass('mainClose');
      $('#nav').toggleClass('navClose');
    });
  });