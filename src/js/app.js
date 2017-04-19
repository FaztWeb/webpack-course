// console.log(require("./hola.js"));

// require('!style-loader!css-loader!./style.css');
require('../css/style.css');
let people = require('./hola');
let $ = require('jquery');

// $('body').append('<h1>'+ people[0].name+'</h1>');

$.each(people, function (key, value) {
  $('body').append('<h1>'+ people[key].name+'</h1>');
})

console.log(people[0].name);
