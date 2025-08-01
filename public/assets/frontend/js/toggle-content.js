$(document).ready(function() {
    $('.wrap-all-question .box-content-question .question').click(function() {
     $(this).parent().find(".content-answer").toggle();
     $(this).parent().find('.question').toggleClass('text-f37021');
 });
});