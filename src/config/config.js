require('dotenv/config')

module.exports = {
  development: {
    databases: {
      rest: {
        username: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DB,
        host: process.env.MYSQL_HOST,
        dialect: 'mysql'
      }
    }
  },
  test: {
    databases: {
      rest: {
        username: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DB,
        host: process.env.MYSQL_HOST,
        dialect: 'mysql'
      }
    }
  },
  production: {
    databases: {
      rest: {
        username: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DB,
        host: process.env.MYSQL_HOST,
        dialect: 'mysql'
      }
    }
  }
}
