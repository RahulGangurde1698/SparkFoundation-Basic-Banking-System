const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mob: {
        type: Number,

    },
    amount: {
        type: Number,
        required: true
    }
});

const Users = mongoose.model('customers', userSchema);

module.exports = Users;