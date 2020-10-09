exports.seed = function(knex) {
  const resources = [
    {
      name: 'Computer',
      project_id: 1
    },
    {
      name: 'Bed',
      project_id: 2
    },
    {
      name: 'Mouse',
      project_id: 1
    },
    {
      name: 'Keyboard',
      project_id: 1
    },
    {
      name: 'Blanket',
      project_id: 2
    },
    {
      name: 'Pillow',
      project_id: 2
    }
  ]
  return knex('resource').insert(resources);
};
