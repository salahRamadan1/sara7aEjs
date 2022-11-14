 
const { User } = require('../service/user.service')

const router = require('express').Router()
router.get('/user/:id' , User)
module.exports = router