const { Register,  handleRegister } = require('../service/register.service')

const router = require('express').Router()
router.get('/register' , Register)
router.post('/handleRegister' , handleRegister)


module.exports = router