App.Views.Pomodoros.Item = Backbone.View.extend({
  template: _.template($('#pomodoro-item').html()),
  tagName: 'li',

  render: function() {
    $(this.el).html(this.template(this.model.toJSON()));
    if (this.model.isCompleted()) {
      $(this.el).addClass('completed');
    }

    return this;
  }
});
