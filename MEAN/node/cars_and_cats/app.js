// get the http module:
const http = require('http');
// fs module allows us to read and write content for responses!!
const fs = require('fs');
// creating a server using http module:
const server = http.createServer(function (request, response){
  var file;
  var type;

  switch (request.url) {
    case "/":
      file = "./views/index.html"
      type = "text/html"
      break;
    case "/cars":
      file = "views/cars.html"
      type = "text/html"
      break;
    case "/cats":
      file = "views/cats.html"
      type = "text/html"
      break;
    case "/cars/new":
      file = "views/carsnew.html"
      type = "text/html"
      break;
    case "/images/car1.jpg":
      file = `.${request.url}`
      type = "image/jpg"
      break;
    case "/images/car2.jpg":
      file = `.${request.url}`
      type = "image/jpg"
      break;
    case "/images/cat.jpg":
      file = `.${request.url}`
      type = "image/jpg"
      break;
    case "/images/cat2.jpg":
      file = `.${request.url}`
      type = "image/jpg"
      break;
    case "/stylesheets/style.css":
      file = "stylesheets/style.css"
      type = "text/css"
      break;
    default:
      file = null
      break;
  }

  // see what URL the clients are requesting:
  console.log('client request URL: ', request.url);
  // this is how we do routing:
  if(file !== null) {
      console.log(`file: ${file} // type: ${type}`);
      fs.readFile(`${ file }`, function (errors, contents){
          response.writeHead(200, {'Content-Type': `${ type }`});
          response.write(contents);
          response.end();
      });
  }
  else {
    fs.readFile('./views/404.html', 'utf8', function(errors, contents){
      response.writeHead(404, {'Content-Type': 'text/html'});
      response.write(contents);
      response.end();
    });
  }
});
server.listen(7077);
console.log("Running in localhost at port 7077");
