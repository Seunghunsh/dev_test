// Run this by going `node index.js`

'use strict';

var http = require('http');
var PORT = 9001;
var url = require('url');
var chalk = require('chalk');

var server = http.createServer(function(req, res) {

  var route = ''; // (1) parse the route
  switch(route) {
    case 'pokemon':
      var pokemonUrl = 'http://pokeapi.co/api/v2/pokemon/' + pokemonNumber + '/';

      /**
       * (2) If route is /pokemon/{number} make an API call to the pokeapi to
       * pull info about the Pokemon with that number
       */
      http.get(pokemonUrl, function() {
        // (3) Use a Promise to control the flow here
      });

      /**
       * (4) If the Pokemon's base_experience is greater than 100, return the
       * name and weight in an object. If the Pokemon's base_experience is less
       * than 100, return its name and base_experience
       */
      res.end();

      /**
       * Editing ends here
       */

    case '/':
    default:
      res.end('Hello!');
    break;
  }

});

server.listen(PORT, '127.0.0.1');
console.log(`Server running at http://127.0.0.1:${PORT}/`);
