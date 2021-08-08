module.exports.isAuthenticated = async (req, res, next) => {
  const API_KEY = 'FD51FDF5DF1DSA1TY1TWER3ERE1315RE'
  if (!req.query.apiKey) {
    return res.status(401).send({
      message: 'Must be authenticated with an API Key to hit this endpoint'
    })
  } else {
    const { apiKey } = req.query
    if (apiKey === API_KEY) {
      return next()
    } else {
      return res.status(401).send({ message: 'API Key does not match!' })
    }
  }
}
