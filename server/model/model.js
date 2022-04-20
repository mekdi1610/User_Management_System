const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique:true
    },
    gender:{
        type: String,
    },
    status:{
        type: String,
    }
}) //allows to define shape of the doc

const Userdb = mongoose.model('userdb', schema);
module.exports = Userdb;