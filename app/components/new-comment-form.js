import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),
  newComment: {
    text: null
  },
  message: null,
  actions: {
    createComment(comment) {
      if ((this.get('newComment.text') !== null)) {
        this.sendAction('createComment', this.get('newComment'), this.get('post'));
        this.set('newComment.text', null)
        this.set('message', null)
      } else {
        this.set('message', 'Write a comment before submitting')
      }
    }
  }
});
