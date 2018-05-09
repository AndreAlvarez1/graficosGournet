
$('.button-collapse').sideNav({
menuWidth: 300, // Default is 300
edge: 'left', // Choose the horizontal origin
closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
draggable: true, // Choose whether you can drag to open on touch screens,
}
);


//MATERIALIZE ESCOGER FECHA-->
    $('.datepicker').pickadate({
   selectMonths: true, // Creates a dropdown to control month
   selectYears: 5, // Creates a dropdown of 15 years to control year,
   today: 'Today',
   clear: 'Clear',
   close: 'Ok',
   closeOnSelect: true, // Close upon selecting a date,
   container: undefined, // ex. 'body' will append picker to body
  });


//MATERIALIZE INPUT SELECT-->
    $(document).ready(function() {
  $('select').material_select();
});
