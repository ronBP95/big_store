const express = require('express')
const router = express.Router()
const { registerUser, loginUser, getMe, allUsers } = require('../../controllers/userController.js')


// For debugging
router.get('/', allUsers)
// For debugging

router.post('/', registerUser)
router.post('/', loginUser)
router.get('/me', getMe)

module.exports = router;