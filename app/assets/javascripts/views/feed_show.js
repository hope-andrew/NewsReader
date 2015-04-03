NewsReader.Views.FeedShow = Backbone.View.extend({
  template: JST["feeds/feedShow"],

  // tagName: "ul",  .... so close

  events: {
    "click .refresh": "refreshFeed"
  },

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var renderedContent = this.template({feed: this.model});
    this.$el.html(renderedContent);
    return this;
  },

  refreshFeed: function() {
    this.model.fetch();
    this.render();
  }
})
