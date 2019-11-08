

$(document).ready(function() {

    $("#address").submit(function(event) {

      event.preventDefault();

      var streetAddress = $("input#streetAddress").val();
      console.log(streetAddress);

      var unitNumber = $("input#unitNumber").val();
      console.log(unitNumber);

      var city = $("input#city").val();
      console.log(city);

      var state = $("input#state").val();
      console.log(state);

      var zipCode = $("input#zipCode").val();
      console.log(zipCode);

      var output = streetAddress + " " + unitNumber + " " + city + " " + state + " " + zipCode;

      console.log(output);

      $("#output").text(output);





    });
});
