import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
      deletePost (post) {
        console.log(post)
        post.deleteRecord();
        post.save();
      }
    }
  });
