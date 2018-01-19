import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr('string'),
  user_id: DS.attr('number'),
  editable: DS.attr('boolean'),
  post_id: DS.attr('number'),
  post: DS.belongsTo('post'),
  user: DS.belongsTo('user')
});
