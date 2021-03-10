-- RESTful API built on Node, Express, and MongoDB

----------------
Installation:
----------------
1. unzip project archive into a separate sub-folder
2. in console, run 'npm install'
3. after successful installation of required node modules, run command "nodemon server.js" and verify that you see the line "Server listening on localhost:8080"

----------------
Description:
----------------

This is an API server for storing and displaying data regarding workers and work orders, and assigning these to each other. This was built using pure JavaScript, with MongoDB and Express on top of a Node server. These technology choices allow portability, speed, and flexibility for growth and scaling as required down the road.

----------------
Usage:
----------------

This is modeled on a RESTful API with multiple endpoints. All end points extend from "http://localhost:8080/workers" for data regarding workers, and "http://localhost:8080/orders" for data regarding orders.

Please note all IDs for workers and orders will be in MongoDB ID format, and will look similar to: 5d4908e5ce7f64319cfe414b. This entire string should be submitted in the place of the word "id" in any of the following routes.

Recommended usage is via a program like Postman that will allow you to interact with an API server using various HTTP request types. HTTP request types are noted before the route, in all capitals. Other programs may be used, as long as the program supports sending HTTP requests of various types (including "DELETE" and "PUT" specifically). Any GET route can be accessed through a browser by typing the full URL into the address bar.

Workers:

GET "/workers":
	Displays a list of all workers

GET "/workers/id":
	Displays data for specified worker

POST "/workers":
	Add a new worker to the database. Note that the worker data should be specified in the request body in application/json format, with properties labeled as follows: "name", "company", and "email".

DELETE "/workers/id":
	Permanently deletes a worker from the database. Note that this route does not ask for confirmation: deletion is immediate and irreversible.

PUT "/workers/id":
	Use this route to update data for a worker already in the database. Worker data should be sent in the same manner as creating a new worker, with all three properties explicity specified (name, company, and email).

GET "/workers/id/orders":
	Displays a list of work orders that are currently assigned to the specified worker.

GET "/workers/id/orders/sorted":
	Displays a list of work orders for the specified worker, sorted by deadline with the earliest deadline first.


----------------
Work Orders:
----------------

GET "/orders":
	Displays a list of all work orders.

GET "/orders/sorted":
	Displays a list of all work orders, sorted by deadline with the earliest deadline first.

GET "/orders/id":
	Displays data for specified order.

POST "/orders":
	Add a new work order to the database. Note that the work order data should be specified in the request body in application/json format, with properties labeled as follows: "title", "description", "deadline" (while deadline may be able to interpret more than one format, we strongly encourage American date formats: MM/DD/YYYY)

DELETE "/orders/id":
	Permanently deletes a work order from the database. Note that this route does not ask for confirmation: deletion is immediate and irreversible.

PUT "/orders/id":
	Use this route to update data for a work order already in the database. Work order data should be sent in the same manner as creating a new work order, with all three properties explicity specified (title, description, and deadline).

GET "/orders/orderId/assign/workerId":
	Note in this route that orderId and workerId are still MongoDB IDs, and should follow the correct format. The order ID should be entered first, with the worker's ID to be assigned appearing last, after "/assign/". This will add a worker to a work order's list of workers, and will also add the work order to the specified worker's list of work orders.

