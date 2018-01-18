import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateComment(comment) {
      comment.save();
      }
    }
});
