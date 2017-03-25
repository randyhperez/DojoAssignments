$(document).ready(function() {
  $('form').submit(function() {
    var firstName = $('input[name=first]').val();
    $('input[name=first]').val('')
    var lastName = $('input[name=last]').val();
    $('input[name=last]').val('')
    var desc = $('textarea').val();
    $('textarea').val('')
    var newCard = '<div class="contact-card" style="border: 2px solid black; margin-left: 50px; margin-bottom: 20px; padding: 10px;"><h2>' + firstName + ' ' + lastName + '</h2><p>Click here for description</p><p style="display: none">' + desc + '</p></div>';
    $('#card-box').prepend(newCard);

    return false;
  });
  $(document).on('click', '.contact-card h2+p', function() {
    $(this).toggle();
    $(this).next().toggle();
  });
});
