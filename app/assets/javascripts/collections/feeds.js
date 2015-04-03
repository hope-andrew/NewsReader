NewsReader.Collections.Feeds = Backbone.Collection.extend({
  url: "api/feeds",
  model: NewsReader.Models.Feed,

  getOrFetch: function(id) {
    if (this.get(id)) {
      this.get(id).fetch();
      return this.get(id);
    } else {
      var feed = new NewsReader.Models.Feed({id: id});
      feed.fetch({
        success: function() {
          this.add(feed);
        }.bind(this)
      });
      return feed;
    }
  }
});
