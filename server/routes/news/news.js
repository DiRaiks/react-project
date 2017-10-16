const express = require('express')
const router = express.Router()
const newsController = require('./newsController')

router.get('/', newsController.list)
// router.get('/', loginController.list)

module.exports = router
