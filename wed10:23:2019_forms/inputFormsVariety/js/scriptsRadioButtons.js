

// scriptsRadioButtons

$(document).ready(function(){
  $("form#iceFlavor").submit(function(event){


    event.preventDefault();

   




    $("#displayChoice").text($("input:radio[name=flavor]:checked").val());

  });
});
// $(document).ready(function(){
//
//   $("form#drinkChoice").submit(function(event){
//     event.preventDefault();
//
//     $("#outputDrink").text($("#beverage").val());
//
//   });
//
//   $("form#drinkChoice2").submit(function(event){
//     event.preventDefault();
//
//     $("#outputDrink2").text($("beverage2").val());
//   });
//
// });
