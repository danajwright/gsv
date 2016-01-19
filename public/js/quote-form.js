$(document).ready(function() {

  $('input#submitButton').click( function() {
      $.post( 'some-url', $('form#myForm').serialize(), function(data) {
           ... do something with response from server
         },
         'json'
      );
  });

  $('input#submitButton').click( function() {
      $.ajax({
          url: 'some-url',
          type: 'post',
          dataType: 'json',
          data: $('form#myForm').serialize(),
          success: function(data) {
                     ... do something with the data...
                   }
      });
  });


});