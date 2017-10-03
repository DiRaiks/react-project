const express = require('express')
const router = express.Router()
const loginController = require('./loginController')

router.post('/', loginController.login)
// router.get('/', loginController.list)

module.exports = router
