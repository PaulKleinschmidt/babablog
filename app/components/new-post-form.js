import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['newPost'],
  auth: Ember.inject.service(),
  test: false,
  newPost: {
    title: null,
    content: null
  },
  message: null,
  actions: {
    createPost(post) {
      if ((this.get('newPost.title') !== null) && (this.get('newPost.content') !== null)) {
        this.sendAction('createPost', this.get('newPost'));
        this.set('newPost.title', null)
        this.set('newPost.content', null)
        this.set('message', null)
      } else {
        this.set('message', 'please fill in both fields :)')
      }
    }
  }
});
