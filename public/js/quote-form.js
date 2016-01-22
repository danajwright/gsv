$(document).ready(function() {

  var sampleData = {
    fullName: 'Full Name',
    email: 'email@bla.com',
    phone: '7072225555',
    pickupZip: '94117',
    pickupDate: '06/03/16',
    deliverZip: '95401',
    deliverDate: '06/09/16',
    cargoValue: '30,000',
    cargoWeight: '2000',
  }

  $('#quote-button').on( "click", function(event) {
    event.preventDefault();
    console.log('submit button clicked')
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