const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name must be provided"],
    },
    assembly_line: {
        type:Number,
        required:[true,"Must Be provided"],
    },
    manages:[{
        type:Number,
        default:0,
    }],
});

module.exports = mongoose.model('Employee',EmployeeSchema);