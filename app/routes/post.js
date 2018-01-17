import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  model (params) {
    return this.store.findRecord('post', params.post_id);
  },
  actions: {
    updatePost(post) {
      post.save();
    },
    createComment(comment, post) {
      let newComment = this.get('store').createRecord('comment', comment);
      post.get('comments').pushObject(newComment);
      newComment.save()
    }
  }
});
