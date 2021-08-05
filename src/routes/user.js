const { Router } = require('express')
const user = require('../controllers/user-controller')

const router = Router()

// Routes go here
router.get('/:id', user.getUser)

router.post('/createUser', user.createUser)

module.exports = router
