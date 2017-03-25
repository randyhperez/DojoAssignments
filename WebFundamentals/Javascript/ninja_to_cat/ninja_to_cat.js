$(document).ready(function () {
  $('img').click(function () {
    var ogImg = $(this).attr('src');
    var hiddenImg = $(this).attr('data-alt-src');
    $(this).attr("src", hiddenImg);
    $(this).attr("data-alt-src", ogImg);
  });
  $('img').on('mouseover', function () {
    $(this).css('outline', 'solid', 'black').on('mouseout', function() {
      $(this).css('outline', 'none');
    })
  })
});
