
// $(document).ready(function() {

//   $('#quoteForm').on("submit", function(event) {

//     excluded: ':disabled';
//     event.preventDefault();

//     var validator = $("#quoteForm").validate();
//     if (validator.form()) {
        
//       var sampleData = {
//         fullName: $("#quoteName").val(),
//         email: $("#quoteEmail").val(),
//         phone: $("#quotePhone").val(),
//         pickupZip: $("#quotePickupZip").val(),
//         pickupDate: $("#quotePickupDate").val(),
//         deliverZip: $("#quoteDeliverZip").val(),
//         deliverDate: $("#quoteDeliverDate").val(),
//         cargoValue: $("#quoteCargoValue").val(),
//         cargoWeight: $("#cargoWeight:checked").val(),
//       }

//       console.log('submit button clicked')

//       $.ajax({
//         url: '/email',
//         type: 'post',
//         dataType: 'json',
//         data: sampleData,

//         // callback on success of ajax
//         success: function(data) {
//           $('#quoteModal').modal('hide');
//           console.log(data);
//         }
//       });
//     }
      
//   });

// });







// $(document).ready(function() {

//     //form validation rules
//     $("#quoteForm").validate({
//         excluded: ':disabled',
//         errorElement: 'div',
        
//         rules: {
//             quoteName: "required",
//             quoteEmail: "required",
//             quotePhone: "required",
//             quotePickupZip: "required",
//             quotePickupDate: "required",
//             quoteDeliverZip: "required",
//             quoteDeliverDate: "required",
//             quoteCargoValue: "required"
//         },

//         messages: {
//             quoteName: "Please enter your name",
//             quoteEmail: {
//                 required: "Please provide your email",
//                 email: "Please provide a valid email"
//             },
//             quotePhone: "Please enter your phone number",
//             quotePickupZip: "Please provide a pickup zipcode",
//             quotePickupDate: "Please provide a pickup date",
//             quoteDeliverZip: "Please provide a delivery zipcode",
//             quoteDeliverDate: "Please provide a delivery date",
//             cargoWeight: "Please provide approximate weight"
//         },

//         // form validates so do the ajax
//         submitHandler: function(form) {
          
//           var sampleData = {
//             fullName: $("#quoteName").val(),
//             email: $("#quoteEmail").val(),
//             phone: $("#quotePhone").val(),
//             pickupZip: $("#quotePickupZip").val(),
//             pickupDate: $("#quotePickupDate").val(),
//             deliverZip: $("#quoteDeliverZip").val(),
//             deliverDate: $("#quoteDeliverDate").val(),
//             cargoValue: $("#quoteCargoValue").val(),
//             cargoWeight: $("#cargoWeight:checked").val(),
//           }

//           event.preventDefault();

//           console.log('submit button clicked')

//           $.ajax({
//             url: '/email',
//             type: 'post',
//             dataType: 'json',
//             data: sampleData,

//             // callback on success of ajax
//             success: function(data) {
//               $('#quoteModal').modal('hide');
//               console.log(data);
//             }
//           });
//         }
//     });
        
// });

