$(document).ready(function() {
  // loop through images
  for (var i = 1; i <= 151; i++) {
    $('#pokemon').append('<img id=' + i + ' src="http://pokeapi.co/media/img/' + i + '.png">')
  }
  // Get Name, Img, Types, Weight and Height on img click
  $('img').on('click', function(e) {
    var pokeID = $(this).attr('id');
    var pokeImg = '<img src=' + $(this).attr('src') + '>';
    $.get('http://pokeapi.co/api/v2/pokemon/' + pokeID, function(poke) {
      var pokeName = '<h2 style="margin-left: 30%;">' + poke.name + '</h2>';
      var height = '<h4>Height</h4><p>' + poke.height + '</p>';
      var weight = '<h4>Weight</h4><p>' + poke.weight + '</p>';
      var types = "<h4>Types</h4><ul>";
      // loop through types + build types string
      for (var i = 0; i < poke.types.length; i++){
        types += "<li>" + poke.types[i].type.name + "</li>";
      }
      types += "</ul>";
      // Append items to PokeDex
      $('#pokedex').html(pokeName + pokeImg + types + height + weight)
    }, 'json');
  });
});
