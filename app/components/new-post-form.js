import Ember from 'ember';

export default Ember.Component.extend({
  className: "submit",
  newPost: {
    title: null,
    content: null
  },
  actions: {
    createPost(post) {
      this.sendAction('createPost', this.get('newPost'));
      console.log(this.get('newPost.title'))
      this.set('newPost.title', null)
    }
  }
});
