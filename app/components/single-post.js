import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updatePost(post) {
      return this.sendAction('updatePost', this.get('post'));
      // console.log('hello abab')
    }
  }
});
