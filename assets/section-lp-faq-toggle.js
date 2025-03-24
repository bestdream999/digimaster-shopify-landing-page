$(document).ready(function() {
  $(".question_contain").on("click", function() {
    $(this).siblings().slideToggle(300);
    const specificChild = $(this).find(".faq_toggle");
    if (specificChild.length) {
      specificChild.toggleClass("anti_arrow");  
    }
  });
});