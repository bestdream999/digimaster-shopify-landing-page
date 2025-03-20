$(document).ready(function() {
  $(".hamburger").click(function() {
    $(".sp-toggle").slideToggle(500);
    $(this).toggleClass("change");
  });
});