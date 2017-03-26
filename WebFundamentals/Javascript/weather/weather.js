$(document).ready(function() {
 $('form').submit(function() {
   console.log('hello');
   var city = $('input[name=city]').val();
   $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&&APPID=671255ca12a1cd896c4ea41d7f52b8bb', function(res){
     var temp = '<p>' + res.main.temp + ' F°</p>';
     var name = '<h2>' + res.name + '</h2>';
     $('#weatherRes').html(name + temp);
     $('input[name=city]').val('');
    console.log(temp);
  });
   return false;
 });
});
