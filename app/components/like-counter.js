import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),
  likedByUser: false,
  actions: {
    addLike(post) {
      this.sendAction('addLike', post);
      this.set('likedByUser', true);
      console.log(this.get('likedByUser'));
    },
    deleteLike(like) {
      this.set('likedByUser', false);
      like.deleteRecord();
      like.save();
    }
  }
});
