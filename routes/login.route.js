const { login, handleLogin } = require('../service/login.service')

const router = require('express').Router()
router.get('/login' , login)
router.post('/handleLogin' , handleLogin)

module.exports = router