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

// var lastFocus;

// function onPopupOpen() {
//   $("#module").show();
// }

// function onPopupClose() {
//   $("#module").hide();
//   Cookies.set('colorboxShown', 'yes', {
//     expires: 1
//   });
//   $(".clear-cookie").fadeIn();
//   lastFocus.focus();
// }

// var moduleOptions = {
//   inline: true,
//   //transition: "fade",
//   fixed: true,
//   href: "#module",
//   className: "cta",
//   maxWidth: "650px",
//   width: "90%",
//   height: "75%",
//   maxHeight: "450px",
//   bottom: "5%",
//   onComplete: onPopupOpen,
//   onClosed: onPopupClose
// }

// function displayPopup() {
//   $.colorbox(moduleOptions);
// }
// setTimeout(function(){
//   var popupShown = Cookies.get('colorboxShown');

//   if(popupShown){
//     console.log("Cookie found. No action necessary");
//   } else {
//     lastFocus = document.activeElement;
//     displayPopup();
//   }
//   // displayPopup()
// }, 2000);


// $(window).resize(function(){
//   $.colorbox.resize({
//     width: window.innerWidth > parseInt(moduleOptions.maxWidth) ? moduleOptions.maxWidth : moduleOptions.width,
//     height: window.innerHeight > parseInt(moduleOptions.maxHeight) ? moduleOptions.maxHeight : moduleOptions.height,
//   });
// });

