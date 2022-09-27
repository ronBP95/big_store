const express = require('express')
const router = express.Router()
const { registerUser, loginUser, getMe, allUsers, deleteUser, addToCart, removeFromCart } = require('../../controllers/userController.js')


// For debugging
router.get('/', allUsers)
// For debugging

router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/me', getMe)
router.delete('/:id', deleteUser)

// Cart Routes
router.post('/add', addToCart)
router.post('/remove', removeFromCart)

module.exports = router;