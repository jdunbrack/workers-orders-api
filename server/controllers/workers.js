const Worker = require('../models/worker');
const WorkOrder = require('../models/order');

module.exports = {
    getAllWorkers: (req, res) => {
        Worker.find({}, (err, data) => {
            if (err || !data) {
                res.json({ status: "Error", data: err });
                return;
            } else {
                res.json({ status: "Success", data: data });
            }
        })
    },

    getWorkerById: (req, res) => {
        Worker.findById(req.params.id, (err, data) => {
            if (err || !data) {
                res.json({ status: "Error", data: err });
                return;
            } else {
                res.json({ status: "Success", data: data });
            }
        })
    },

    addWorker: (req, res) => {
        let newWorker = new Worker(req.body);
        if (!newWorker.name || !newWorker.company || !newWorker.email) {
            res.json({ status: "Error", data: "Please ensure data contains required fields: name, company, and email"});
            return;
        }

        Worker.create(newWorker, (err, data) => {
            if (err || !data) {
                res.json({ status: "Error", data: err });
                return;
            }
            res.json({ status: "Success", data: data });
        })
    },

    deleteWorker: (req, res) => {
        Worker.findByIdAndDelete(req.params.id, (err, data) => {
            if (err || !data) {
                res.json({ status: "Error", data: err });
                return;
            }
            res.json({ status: "Success", data: data });
        });
    },

    addWorkOrder: (req, res) => {
        Worker.findByIdAndUpdate(req.params.workerId, { $push: { workOrders: req.params.orderId } }, (err, data) => {
            if (err || !data) {
                res.json({ status: "Error", data: {data, message: "Unable to add work order to worker's list."}});
                return;
            }
        })
    },

    getWorkOrders: (req, res) => {
        Worker.find({
            _id: req.params.id,
            $replaceRoot: '$workOrders'
        }, (err, data) => {
            if (err || !data) {
                res.json({ status: "Error", data: err });
                return;
            }
            res.json({ status: "Success", data: data });
        })
    },

    updateWorker: (req, res) => {
        let updatedInfo = new Worker(req.body);
        if (!updatedInfo.name || !updatedInfo.company || !updatedInfo.email) {
            res.json({ status: "Error", data: "Please ensure data contains required fields: name, company, and email"});
            return;
        }

        Worker.findByIdAndUpdate(req.params.id, updatedInfo, (err, data) => {
            if (err || !data) {
                res.json({ status: "Error", data: err });
                return;
            }
            res.json({ status: "Success", data: data });
        })
    }
    
}