$(document).ready(function() {
  $('.loader').delay(3000).fadeOut(500, function() {
    window.location.assign('views/mainpage.html');
  });
});