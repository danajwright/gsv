$(document).ready(function() {

  $('#quoteForm').on( "submit", function(event) {

    event.preventDefault();
    console.log('submit button clicked')

    var sampleData = {
      fullName: $("#quoteName").val(),
      email: $("#quoteEmail").val(),
      phone: $("#quotePhone").val(),
      pickupZip: $("#quotePickupZip").val(),
      pickupDate: $("#quotePickupDate").val(),
      deliverZip: $("#quoteDeliverZip").val(),
      deliverDate: $("#quoteDeliverDate").val(),
      cargoValue: $("#quoteCargoValue").val(),
      cargoWeight: $("#cargoWeight:checked").val(),
    }

    $.ajax({
      url: '/email',
      type: 'post',
      dataType: 'json',
      
      data: sampleData,
      success: function(data) {
        console.log(data);
      }
    });
  });


});