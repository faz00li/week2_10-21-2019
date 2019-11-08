
// dropDownMenu
$(document).ready(function(){

  $(".clickable").click(function(event){

    event.preventDefault();

    var votingAge = parseInt($("#inputAge").val());

    if (votingAge > 21) {
      $(".ofAge").fadeIn("slow");
      $(".underAge").hide();
    }
    else {
      $(".ofAge").hide();
      $(".underAge").fadeIn("Slow");
    }

  });

});
