import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),
  actions: {
      deleteComment (comment) {
        comment.deleteRecord();
        comment.save();
      }
    }
});
