$(document).ready(function() {
  $('img').click(function() {
      var getAlt = $(this).attr('alt');
      var house = '';
      var altSplit = getAlt.split(' ');
      var altLength = getAlt.split(' ').length;
      for (var i = 0; i < altLength; i++){
        if (i === altLength - 1) {
          house += altSplit[i];
        }
        else (
          house += altSplit[i] + '+'
        )
      }
    $.get('http://www.anapioficeandfire.com/api/houses?name=' + house, function(results) {
        var name = '<p>Name: ' + results[0].name + '</p>';
        var words = '<p>Words: ' + results[0].words + '</p>';
        var titlesStr = '';
        for (var i = 0; i < results[0].titles.length; i++) {
          if (i === results[0].titles.length - 1) {
            titlesStr += results[0].titles[i];
          }
          else {
            titlesStr += results[0].titles[i] + ", ";
          }
        }
        var titles = '<p>Titles : ' + titlesStr + '</p>';
      $('#info').html(name + words + titles)
    }, 'json');
  });
});
