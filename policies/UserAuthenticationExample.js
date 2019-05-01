const JWTService = require('../services/JWTService')

module.exports = (req, res, next) => {
  if (!req.headers.authorization) return res.status(403).json({message: 'Not authorized'})
  JWTService.verify(req.headers.authorization).then(decode => {
    req.sender = decode
    next()
  }).catch(err => {
    console.log(err)
    return res.status(400).send({message: 'Not authorized'})
  })
}
