import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updatePost(post) {
      this.sendAction('updatePost', this.get('post'));
      // console.log('hello abab')
    }
  }
});
