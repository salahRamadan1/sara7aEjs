const { Home } = require('../service/home.service')

const router = require('express').Router()
router.get('/' , Home)

module.exports = router