var _  = require('lodash');
var co = require('co');
var request = require('co-request');

var config = require('../config');
var mongo = require('../db');

var fetchPosts = co.wrap(function *(){
  console.log("Fetching information from Wordpress Blog API: " + config.wordpressApiUrl);
  var response = yield request('http://apiedepagina.com/api/get_posts/');
  var body = JSON.parse(response.body);
  console.log(body.posts);
});

fetchPosts();
