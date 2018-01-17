import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findAll('post')
    return this.get('store').findRecord('post', params.post_id, {include: 'comments'});
  },
  auth: Ember.inject.service(),
  test: true,

  // user: Ember.computed.alias('auth.credentials.email'),
  // isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),
  // signedIn: Ember.computed.alias('session.isAuthenticated'),
  // isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),
  actions: {
    createPost(post) {
      console.log('am i Authenticated? ', this.get('auth.isAuthenticated'))
      let newPost = this.get('store').createRecord('post', post);
      newPost.save();
    },
    updatePost(post) {
      console.log('hello!')
    }
  }
});
