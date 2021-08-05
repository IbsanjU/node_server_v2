const user = (sequelize, Datatypes) => {
  const User = sequelize.define(
    'user',
    {
      id: {
        type: Datatypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      username: {
        type: Datatypes.STRING,
        unique: true
      },
      password: {
        type: Datatypes.STRING
      }
    },
    {
      timestamps: true,
      freezeTableName: true
    }
  )

  User.sync()
  return User
}

module.exports = user
