const express = require('express')
const router = express.Router()
const { registerUser, loginUser, getMe, allUsers, deleteUser, viewCart, addToCart, removeFromCart } = require('../../controllers/userController.js')
const { protect } = require('../../middleware/authMiddleware')

// For debugging
router.get('/', allUsers)
// For debugging

router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getMe )
router.delete('/:id', deleteUser)

// Cart Routes
router.get('/cart', protect, viewCart)
router.post('/add', addToCart)
router.post('/remove', removeFromCart)

module.exports = router;