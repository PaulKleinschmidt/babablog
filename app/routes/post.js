import Ember from 'ember';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),
  auth: Ember.inject.service(),
  model (params) {
    return this.store.findRecord('post', params.post_id);
  },
  actions: {
    updatePost(post) {
      post.save();
      this.get('flashMessages').success('Post Updated');
    },
    createComment(comment, post) {
      let newComment = this.get('store').createRecord('comment', comment);
      post.get('comments').pushObject(newComment);
      newComment.save();
      this.get('flashMessages').success('comment posted');
    },
    addlike(post) {
      console.log('hello')
    }
  }
});
