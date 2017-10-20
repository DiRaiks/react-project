const express = require('express')
const router = express.Router()
const weatherController = require('./weatherController')

router.post('/', weatherController.create)
router.get('/:city', weatherController.list)

module.exports = router
