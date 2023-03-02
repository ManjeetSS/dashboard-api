const mongoose = require('mongoose');

const AlertSchema = new mongoose.Schema({
    description:{
        type:String,
    },

    time:{
        type:Date,
        default:Date.now(),
    }
});

module.exports = mongoose.model('Alert',AlertSchema);