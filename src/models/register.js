let mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    email: {
       type: String,
       required: true,
       unique: true
    },
    number: {
        type: Number,
        required:true,
        unique:true
    },
    address: {
        type: String,
        required: true
    },
    password: {
        type:String,
        required:true
    },
    cpassword: {
        type:String,
        required:true
    }
});

const register = new mongoose.model("akshaydata", registerSchema);

module.exports = register;