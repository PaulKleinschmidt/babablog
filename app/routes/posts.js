import Ember from 'ember';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),
  model () {
    return this.get('store').findAll('post');
    // return this.get('store').findRecord('post', params.post_id, {include: 'comments'});
  },
  auth: Ember.inject.service(),
  actions: {
    createPost(post) {
      let newPost = this.get('store').createRecord('post', post);
      newPost.save();
      this.get('flashMessages').success('New Post Published');
    },
    addLike(post) {
      this.get('store').createRecord('like', {post:post}).save();
      // post.get('likes').pushObject(newLike);
      // newLike.save();
    }
  }
});
