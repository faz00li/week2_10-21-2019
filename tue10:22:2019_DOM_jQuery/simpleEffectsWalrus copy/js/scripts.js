


$(document).ready(function() {

  $(".toggle").click(function(){
    $(".showing").slideToggle();
    $(".hidden").slideToggle();

  });

  $(".fadeIn").click(function(){

    $(".fadeImage").fadeIn();

  });

  $(".fadeOut").click(function(){

    $(".fadeImage").fadeOut();
  });

  $(".slideDown").click(function(){

    $(".fadeImage").slideDown();
  });

  $(".slideUp").click(function(){

    $(".fadeImage").slideUp();
  });

});
