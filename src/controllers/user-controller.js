const db = require('../models')
const User = db.user

exports.getUser = async (req, res) => {
  const { id } = req.params

  const user = await User.findOne({
    where: {
      id
    }
  })

  if (!user) {
    return res.status(400).send({ message: `No user found with the id ${id}` })
  }
  return res.send(user)
}

exports.createUser = async (req, res) => {
  const { username, password } = req.body
  if (!username || !password) {
    return res.status(400).send({
      message: 'Please provide a username and a password to create a user!'
    })
  }

  let usernameExists = await User.findOne({
    where: {
      username
    }
  })

  if (usernameExists) {
    return res.status(400).send({
      message: 'An account with that username already exists!'
    })
  }

  try {
    let newUser = await User.create({
      username,
      password
    })
    return res.send(newUser)
  } catch (err) {
    return res.status(500).send({
      message: `Error: ${err.message}`
    })
  }
}
