const express = require('express')
const router = express.Router()
const { registerUser, loginUser, getMe, allUsers, deleteUser, viewCart, addToCart, removeFromCart, checkout } = require('../../controllers/userController.js')
const { protect } = require('../../middleware/authMiddleware')

// For debugging
router.get('/', allUsers)
// For debugging

router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getMe )
router.delete('/:id', protect, deleteUser)

// Cart Routes
router.get('/cart', protect, viewCart)
router.post('/add', protect, addToCart)
router.post('/remove', protect, removeFromCart)
router.post('/checkout', protect, checkout)

module.exports = router;