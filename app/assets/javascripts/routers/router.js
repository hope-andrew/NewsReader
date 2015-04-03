NewsReader.Routers.Router = Backbone.Router.extend({
  routes: {
    "": "feedsIndex",
    "feeds/:id": "feedShow"
  },

  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.collection = new NewsReader.Collections.Feeds();
  },

  feedsIndex: function () {
    var feedsView = new NewsReader.Views.FeedIndex({collection: this.collection});
    this.collection.fetch();
    this.$rootEl.html(feedsView.render().$el);
  },

  feedShow: function(id) {
    var feed = this.collection.getOrFetch(id);
    var feedShow = new NewsReader.Views.FeedShow({model: feed});
    this.$rootEl.html(feedShow.render().$el);
  }
})
