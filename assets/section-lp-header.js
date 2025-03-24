$(document).ready(function() {
  $(".hamburger").click(function() {
    $(".sp_toggle").slideToggle(500);
    $(this).toggleClass("change");
  });
});