import Ember from "ember";

export default Ember.ObjectController.extend({
  actions: {
    draw: function(loader) {
      loader.draw();
    }
  }
});
