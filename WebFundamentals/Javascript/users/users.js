$(document).ready(function() {
  console.log('jquery');
  $('form').submit(function() {
    var firstName = $('#first').val();
    var lastName = $('#last').val();
    var email = $('#email').val();
    var phone = $('#phone').val();
    $('tbody').append('<tr><td>' + firstName + '</td><td>' + lastName + '</td><td>' + email + '</td><td>' + phone + '</td></tr>')
    return false;
  });
});
