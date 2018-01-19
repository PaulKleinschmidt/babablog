import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user'),
  post: DS.belongsTo('post')
});

// game: DS.belongsTo('game', {
//     inverse: 'libraries'
//   }),
//   user: DS.belongsTo('user', {
//     inverse: 'libraries'
//   })
// });
