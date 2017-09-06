// define our packages

// third party promise library
// documentation https://www.npmjs.com/package/bluebird
// and http://bluebirdjs.com/
// npm install bluebird
const bluebird = require('bluebird');
mongoose.Promise = bluebird; // what is happening here?

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var Cat = mongoose.model('Cat', { name: String });

var kitty = new Cat({ name: 'Zildjian' });
kitty.save(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('meow');
  }
});

// use routes

//  app.use code

//render home page

//remove

// logout
