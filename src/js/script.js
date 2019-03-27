console.log("hello world");

$(document).ready(function() {
    $('.toggle-button').on('click', function() {
      $('.mobile-nav-container').toggleClass('open');
      $('.toggle-button').toggleClass('close');
      //$('#nav').toggleClass('navClose');
    });
  });

var openIcon = 'img/open_menu.svg';
var closeIcon = 'img/close_menu.svg';

$('.toggle-button').click(function() {
  if($('#toggleBtn').attr('src') === openIcon){
    $('#toggleBtn').attr('src', closeIcon);
  } else {
    $('#toggleBtn').attr('src', openIcon)
  }
})
