var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');


// uses
app.use( express.static( 'public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );

//global
var newInventory = [];




app.listen(5678, function() {
    console.log('server up on port 5678');
});

app.get('/', function(req, res) {
    console.log('inise base url');
    res.sendFile(path.resolve('view/index.html'));

});


app.get( '/inventory', function( req, res ){
  console.log( 'inventory url hit' );

  var newInventoryObject = {
      inventory: newInventory,


  };



  res.send( newInventoryObject );

});


app.post('/newInventory', function(req, res) {
      console.log( 'post hit to /newSong:', req.body );
      console.log(newInventory);
      newInventory.push( req.body);
  res.send( 'meow' );
});


app.post('/search', function(req, res) {
console.log(req.body);
var searchObject = {
search:response.inventory[i].inventory

};
    for (var i = 0; i < response.inventory.length; i++) {
        if (req.body === response.inventory[i].inventory) {
            console.log('found result');


            res.send(searchObject);
        }
    }
});
