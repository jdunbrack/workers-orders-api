const workers = require('../controllers/workers');
const orders = require('../controllers/orders');


module.exports = function(app) {

    app.get("/workers/:id/orders/sorted", (req, res) => {
        orders.getAllByWorkerSorted(req, res);
    })

    app.get("/workers/:id/orders", (req, res) => {
        orders.getAllByWorker(req, res);
    })

    app.get("/workers/:id", (req, res) => {
        workers.getWorkerById(req, res);
    })

    app.get("/workers", (req, res) => {
        workers.getAllWorkers(req, res);
    })

    app.post("/workers", (req, res) => {
        workers.addWorker(req, res);
    })

    app.put("/workers/:id", (req, res) => {
        workers.updateWorker(req, res);
    })

    app.delete("/workers/:id", (req, res) => {
        workers.deleteWorker(req, res);
    })

    app.get("/orders/sorted", (req, res) => {
        orders.getAllSorted(req, res);
    })

    app.get("/orders/:id", (req, res) => {
        orders.getOrderById(req, res);
    })

    app.get("/orders", (req, res) => {
        orders.getAll(req, res);
    })

    app.post("/orders", (req, res) => {
        orders.createWorkOrder(req, res);
    })

    app.delete("/orders/:id", (req, res) => {
        orders.deleteOrder(req, res);
    })

    app.put("/orders/:id", (req, res) => {
        orders.updateWorkOrder(req, res);
    })

    app.get("/orders/:orderId/assign/:workerId", (req, res) => {
        workers.addWorkOrder(req, res);
        orders.addWorkerToOrder(req, res);
    })

    app.get("/", (req, res) => {
        res.json({ status: "Error", data: "Please specify an API endpoint for your request." })
    })
    
    app.listen(8080, () => {console.log("Server listening on localhost:8080")})
}