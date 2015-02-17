var _  = require('lodash');
var co = require('co');
var request = require('co-request');

var config = require('../config');
var mongo = require('../db');

var fetchPosts = co.wrap(function *(){
  console.log("Fetching information from Wordpress Blog API: " + config.wordpress.apiUrl);
  var response = yield request( getPostsUrl() );
  var body = JSON.parse(response.body);
  console.log(body.posts);

  return process.exit(0);
});

function getPostsUrl(){
  return config.wordpress.apiUrl + '/get_posts/';
}

// init task!
fetchPosts();
