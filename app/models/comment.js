import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr('string'),
  user_id: DS.attr('integer'),
  post_id: DS.attr('integer'),
  post: DS.belongsTo('post')
});
