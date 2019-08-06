const mongoose = require('mongoose');

WorkOrderSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    deadline: {
        type: Date,
        required: true
    },
    workers: {
        type: [String],
        required: false
    }
}, {timestamps: true})

mongoose.model('WorkOrder', WorkOrderSchema);

module.exports = mongoose.model('WorkOrder');