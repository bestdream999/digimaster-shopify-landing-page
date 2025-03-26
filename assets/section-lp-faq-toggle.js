$(document).ready(function() {
  $(".question_contain").on("click", function() {
    $(this).siblings().slideToggle(300);
    $(this).toggleClass("active");
  });
});