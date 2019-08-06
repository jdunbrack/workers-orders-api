const mongoose = require('mongoose')

WorkerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    workOrders: {
        type: [String],
        required: false
    }
}, {timestamps: true})

mongoose.model('Worker', WorkerSchema)

module.exports = mongoose.model('Worker');