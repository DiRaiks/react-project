const express = require('express')
const router = express.Router()
const registrationController = require('./registrationController')

router.post('/', registrationController.create)
router.get('/', registrationController.list)

module.exports = router
