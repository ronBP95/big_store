const express = require('express')
const router = express.Router()
const { registerUser, loginUser, getMe } = require('../../controllers/userController.js')

router.get('/', registerUser)
router.post('/', loginUser)
router.get('/me', getMe)

module.exports = router;