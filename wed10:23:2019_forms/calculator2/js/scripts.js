
var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

$(document).ready(function() {

  $("form#add").submit(function(event) {

    event.preventDefault();

    var number1 = parseInt($("input#add1").val());
    var number2 = parseInt($("input#add2").val());

    $("#story").text(add(number1, number2));




  })





});
