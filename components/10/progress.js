  $(function() {
      
    $( "#progressbar" ).progressbar({
  value: 0
        });


      
    $("#1percent").click(function() {
        $("#progressbar").progressbar("option", "value", 1);
       });
      
      $( "#50percent" ).click(function() {
          $("#progressbar").progressbar( "value", 50);    
    });
      
         $( "#finish" ).click(function() {
          $("#progressbar").progressbar( "value", 100);    
    });
      
      
  });