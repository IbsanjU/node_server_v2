const db = require('../models')
const User = db.rest.models.user

exports.getUser = async (req, res) => {
  res.send({ message: 'Api Works...!' })
}
