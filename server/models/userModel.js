const mongoose = require('mongoose')

const userSchema = mongoose.Schema( {
    name: {
        type: String,
        required: [true, "Please enter a name"]
    },
    email: {
        type: String,
        required: [true, "Please enter an email"],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please add a name']
    },
    cart: {
        type: Array,
    },
    orderHistory: {
        type: Array,
    }
},
{
    timestamps: true,
})

module.exports = mongoose.model('User', userSchema)