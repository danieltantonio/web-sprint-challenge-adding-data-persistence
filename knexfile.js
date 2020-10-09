// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './src/db/project.db3'
    },
    seeds: {
      directory: './src/db/seeds'
    },
    migrations: {
      directory: './src/db/migrations'
    }
  }
};
