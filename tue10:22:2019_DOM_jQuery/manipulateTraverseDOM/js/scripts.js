$(document).ready(function(){

  $("button#hello").click(function(){
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webpage").prepend("<li>Hey!</li>");

    $("ul#user").children("li").first().click(function(){
      this.remove();
    });

    $("ul#webpage").children().first().click(function(){
      this.remove();
    });

  });

  $("button#goodbye").click(function(){
    $("ul#user").prepend("<li>Goodbye!</li>");
    $("ul#webpage").prepend("<li>Farewell!</li>");

    $("ul#user").children("li").first().click(function(){
      this.remove();
    });

    $("ul#webpage").children("li").first().click(function(){
      this.remove();
    });

  });

  $("button#stop").click(function(){
    $("ul#user").prepend("<li>Stop!</li>");
    $("ul#webpage").prepend("<li>No you stop!</li>");

    $("ul#user").children("li").first().click(function(){
      this.remove();
    });

    $("ul#webpage").children("li").first().click(function(){
      this.remove();
    });
  });




});
