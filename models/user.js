const mongoose =  require('mongoose')


const userSchema =  new mongoose.Schema({
    name: {
        first:{
            type: String
        },
        last: {
            type: String
        }
    },

    dob:{
        type: Date
    },

    address: {
        type: String
    },

    mobile:{
        type: Number
    },

    email: {
        type: String,
        required: true
    },

    registeredDate: {
        type: Date,
        required: true,
        default: Date.now
    }
})


module.exports =  mongoose.model("User", userSchema, "User");