window.NewsReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    // debugger
    this.$rootEl = $("div#content");
    new NewsReader.Routers.Router({$rootEl: this.$rootEl});
    Backbone.history.start();

  }
};

$(document).ready(function(){
  NewsReader.initialize();
});
