const { Message, handelMessage } = require('../service/message.service')

const router = require('express').Router()
router.get('/message' , Message)
router.post('/handelMessage/:id' , handelMessage)

module.exports = router