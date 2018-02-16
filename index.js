$(document).ready(function() {
//page scroll
$(".link").on("click", function(e) {
var hash = $(this).attr("href");
$("html,body").animate(
{
  scrollTop: $(hash).offset().top
},
800
);
return false;
});
//contact form
$('#contact-form').submit(function(e) {
  var name = $('#name')
  var email = $('#email')
  var message = $('#message')

  if(name.val() == "" || email.val() == "" || message.val() == "") {
    $('.submit-fail').fadeIn('slow').delay(4000).fadeOut('slow');
    return false;
  }
  else {
    $.ajax({
      method: 'POST',
      url: 'https://www.enformed.io/z2e3h2be',
      data: $('#contact-form').serialize(),
      datatype: 'json'
    });
    e.preventDefault();
    $(this).get(0).reset();
    $('.submit-success').fadeIn('slow').delay(3000).fadeOut('slow');
  }
});

$('.submit-fail, .submit-success').click(function() {
$(this).hide();
})
});
