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
});

var lastFocus;

function onPopupOpen() {
  $("#module").show();
 
}

function onPopupClose() {
  $("#module").hide();
  // Cookies.set('colorboxShown', 'yes', {
  //   expires: 1
  // });
  // $(".clear-cookie").fadeIn();
  lastFocus.focus();
}


function displayPopup() {
  $.colorbox({
    inline: true,
    //transition: "fade",
    fixed: true,
    href: "#module",
    className: "cta",
    maxWidth: "90%",
    width: "650px",
    height: "450px",
    maxHeight: "100%",
    onComplete: onPopupOpen,
    onClosed: onPopupClose
  });
}
setTimeout(function(){
  // var popupShown = Cookies.get('colorboxShown');

  // if(popupShown){
  //   console.log("Cookie found. No action necessary");
  // } else {
  //   lastFocus = document.activeElement;
  //   displayPopup();
  // }
  displayPopup()
}, 2000);




