$(document).ready(function() {

  $('#submitButton').click( function() {
      $.ajax({
          url: '/email',
          type: 'post',
          dataType: 'json',
          data: $('form#quoteForm').serialize(),
          success: function(data) {
          console.log(data)
       }
      });
  });


});