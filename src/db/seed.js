var _  = require('lodash');
var co = require('co');

var config = require('../config');

function seed(db){

  return {

    apply: co.wrap(function *(){

      // put your seed data here
      // db.articles.insert({ title: 'hola'});

    })

  };
}

module.exports = seed;
