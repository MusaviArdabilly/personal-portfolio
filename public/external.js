$(window). scroll(function(){
  if ($(this). scrollTop() > 50) {
    $('#navbar'). addClass('shadow');
  } else {
    $('#navbar'). removeClass('shadow');
  }
});