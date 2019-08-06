const WorkOrder = require('./../models/order');

module.exports = {
    getAll: (req, res) => {
        WorkOrder.find({}, (err, data) => {
            if (err || !data) {
                res.json({ status: "Error", data: err });
                return;
            }
            res.json({ status: "Success", data: data });
        })
    },

    getOrderById: (req, res) => {
        WorkOrder.findById(req.params.id, (err, data) => {
            if (err || !data) {
                res.json({ status: "Error", data: err });
                return;
            } else {
                res.json({ status: "Success", data: data });
            }
        })
    },

    createWorkOrder: (req, res) => {
        let newOrder = new WorkOrder(req.body);
        if (!newOrder.title || !newOrder.description || !newOrder.deadline) {
            res.json({ status: "Error", data: "Please ensure data contains all necessary fields: title, description, deadline." });
            return;
        }

        newOrder.save((err, data) => {
            if (err || !data) {
                res.json({ status: "Error", data: err });
                return;
            } else {
                res.json({ status: "Success", data: data });
            }
        })
    },

    addWorkerToOrder: (req, res) => {
        WorkOrder.findByIdAndUpdate(req.params.orderId, { $push: { workers: req.params.workerId } }, (err, data) => {
            if (err || !data) {
                res.json({ status: "Error", data: err });
                return;
            } else {
                res.json({ status: "Success", data: data });
            }
        })
    },

    deleteOrder: (req, res) => {
        WorkOrder.findByIdAndDelete(req.params.id, (err, data) => {
            if (err || !data) {
                res.json({ status: "Error", data: err });
                return;
            } else {
                res.json({ status: "Success", data: data });
            }
        })
    },

    getAllSorted: (req, res) => {
        WorkOrder.find({}).sort('deadline').exec((err, data) => {
            if (err || !data) {
                res.json({ status: "Error", data: err });
                return;
            } else {
                res.json({ status: "Success", data: data });
            }
        })
    },

    getAllByWorker: (req, res) => {
        WorkOrder.find({ workers: req.params.id }, (err, data) => {
            if (err || !data) {
                res.json({ status: "Error", data: err });
                return;
            } else {
                res.json({ status: "Success", data: data });
            }
        })
    },

    getAllByWorkerSorted: (req, res) => {
        WorkOrder.find({ workers: req.params.id }).sort('deadline').exec((err, data) => {
            if (err || !data) {
                res.json({ status: "Error", data: err });
                return;
            } else {
                res.json({ status: "Success", data: data });
            }
        })
    },

    updateWorkOrder: (req, res) => {
        let updatedInfo = new WorkOrder(req.body);
        if (!updatedInfo.title || !updatedInfo.description || !updatedInfo.deadline) {
            res.json({ status: "Error", data: "Please ensure data contains all necessary fields: title, description, deadline." });
            return;
        }

        WorkOrder.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
            if (err || !data) {
                res.json({ status: "Error", data: err });
                return;
            } else {
                res.json({ status: "Success", data: data });
            }
        })
    },
    
}