const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const { find } = require('../models/userModel')

// @desc    Register new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
        res.status(400)
        throw new Error('Please add all fields')
    }

    // Check if user exists
    const userExists = await User.findOne({email})
    if (userExists) {
        res.status(400)
        throw new Error ('User already exists')
    }

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })

    if(user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        }) 
    } else {
        res.status(400)
        throw new Error('Invalid User Data')
    }
})

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body

    // Check for user email
    const user = await User.findOne({email})

    if(user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
        // res.json({ message: "You have successfully logged in"})  
        console.log("Logged in successfully")
    } else {
        res.status(400)
        throw new Error('Invalid credentials')
    }
})

const getMe = asyncHandler(async (req, res) => {
    const { _id, name, email, cart, orderHistory } = await User.findById(req.user.id)
    console.log( _id, name, email )
    res.status(200).json({
        id: _id,
        name,
        email,
        cart,
        orderHistory,
        message: "Profile successfully grabbed",
    })

})

const deleteUser = asyncHandler(async (req, res) => {
    const { _id, name, email } = await User.findByIdAndDelete(req.params.id)

    res.status(200).json({
        id: _id,
        name,
        email,
        message: "Successfully deleted Profile",
    })

})

const allUsers = asyncHandler(async (req, res) => {
    const all = await User.find()
    res.status(200).json(all)
})

// Cart Functions

const viewCart = asyncHandler(async (req, res) => {
    const userCart = await User.findById(req.user.id)
    const cart = userCart.cart
    console.log(cart)
    res.status(200).send({
        cart
    })
})

const addToCart = asyncHandler(async (req, res) => {
    const cart = await User.findById(req.user.id)
    if (cart.cart.length < 5) {
        cart.cart.push(req.body)
        cart.save()
        console.log(cart.cart)
        res.status(200).json({
            message: 'Cart updated'
        })
    } else {
        console.log('Cart is full')
        res.status(400).json({
            message: 'Cart is full.'
        })
    }
})

const removeFromCart = asyncHandler(async (req, res) => {
    const cart = await User.findById(req.user.id)
    const item = req.body.id
    console.log("Item came in as: ", item)
    const object = cart.cart
    for (let i = 0; i < object.length; i++) {
        if (Number(object[i].id) === Number(item)) {
            console.log('splice triggered')
            object.splice(i, 1)
        }
    }
    cart.save()
    res.status(200).json({
        message: 'Cart item deleted'
    })
})

const checkout = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user.id)
    let orderHistory = user.orderHistory
    let cart = user.cart
    orderHistory.push(cart)
    user.save()
    res.status(200).json({
        message: "Checked Out",
        orderHistory,
    })
})

const emptyCart = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user.id)
})


// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, `${process.env.JWT_SECRET}`, {
        expiresIn: '1d',
    })
}

module.exports = {
    registerUser,
    loginUser,
    getMe,
    allUsers,
    deleteUser,
    viewCart,
    addToCart,
    removeFromCart,
    checkout,
    emptyCart,
}