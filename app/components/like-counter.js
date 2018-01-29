import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),
  likedByUser: false,
  toggleLikedByUser: Ember.computed('likedByUser', function() {
      this.toggleProperty('likedByUser');
    }),
  actions: {
    addLike(post) {
      this.sendAction('addLike', post)
      // like.save();
    },
    deleteLike(likes) {

    }
  }
});
