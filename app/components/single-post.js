import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['newPost'],
  message: null,
  actions: {
    updatePost(post) {
      if ((this.get('post.title').length > 0) && (this.get('post.content').length > 0)) {
        this.sendAction('updatePost', this.get('post'));
      } else {
        this.set('message', 'please fill in both fields :)')
      }
    },
    createComment(comment, post) {
      console.log(comment)
      this.sendAction('createComment', comment, post);
    }
  }
});
