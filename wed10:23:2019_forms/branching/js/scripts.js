$(document).ready(function(){
  // var age = parseInt(prompt("How old are you?"));
  //
  // if (age >= 21) {
  //   $("#drinks").show();
  // }
  // else
  //   $("#under-21").show();

  var over21 = confirm("Are you over 21... YES to confrim or CANCEL to quit");

  if (over21)
    $("#drinks").show();
  else
    $("#under-21").show();

});
