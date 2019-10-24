

// dropDownMenu
$(document).ready(function(){

  $("form#drinkChoice").submit(function(event){
    event.preventDefault();

    $("#outputDrink").text($("#beverage").val());

  });

  $("form#drinkChoice2").submit(function(event){
    event.preventDefault();

    $("#outputDrink2").text($("beverage2").val());
  });

});
