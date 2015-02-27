var _ = require('lodash');

function articlesRoutes(db) {

  return {

    index: function *(){

      // var articles = yield db.articles.find({});

      // if (articles && articles.length) {
      //   this.body = articles;
      // }
      // else {
      //   this.status = 404;
      //   this.body = {
      //     error: 'not found'
      //   };
      // }
      this.body = "<b>Hello world!</b>";
    }

  };
}

module.exports = articlesRoutes;