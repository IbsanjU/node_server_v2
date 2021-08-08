const { Router } = require('express')
const user = require('../controllers/user-controller')

const router = Router()

// Routes go here
router.get('/:id', user.getUser)
// http://localhost:3301/user/2

router.post('/createUser', user.createUser)

router.post('/deleteUser', user.deleteUser);

module.exports = router
