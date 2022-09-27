const express = require('express')
const router = express.Router()
const { registerUser, loginUser, getMe, allUsers, deleteUser, addToCart } = require('../../controllers/userController.js')


// For debugging
router.get('/', allUsers)
// For debugging

router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/me', getMe)
router.delete('/:id', deleteUser)

// Cart Routes
router.post('/add', addToCart)

module.exports = router;