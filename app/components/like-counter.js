import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),
  actions: {
    addLike(post) {
      this.sendAction('addLike', post)
      // like.save();
    }
  }
});
