const express = require('express')
const router = express.Router()
const weatherController = require('./weatherController')

router.post('/', weatherController.login)
// router.get('/', loginController.list)

module.exports = router
