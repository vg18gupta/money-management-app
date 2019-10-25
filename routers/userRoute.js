const router = require('express').Router()

const {login} = require('../controllers/userController')
const {register} = require('../controllers/userController')

//localhost:4000/api/users/register
 router.post('/register', register)

 //localhost:4000/api/users/login
 router.post('/login', login)

module.exports = router
