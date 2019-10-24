

$(document).ready(function(){
  $("form#appointments").submit(function(event)  {
    event.preventDefault();

    var name = $("#name").val();
    var description = $("#description").val();
    var date = $("#date").val();
    var time = $("#time").val();

    var output = name + " " + description + " " + date + " " + time;

    $("#outputAppointment").text(output);
  });
});
