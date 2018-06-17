// Smooth scrolling effect
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
});

// Dummy submit form
var expand = document.querySelector('.expand');
expand.style.display = 'none';

function showHide() {
  if (expand.style.display === 'none') {
    $("#submit").click(function(){
        $( ".expand" ).slideDown();
    });
  } else {
    $("#close-btn").click(function(){
        $( ".expand" ).slideUp();
    });
  }
};
