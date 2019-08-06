const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

const models_path = path.join(__dirname + "./../models");

mongoose.connect('mongodb://localhost/hatchways');

fs.readdirSync(models_path).forEach(file => {
    if (file.indexOf('.js') != -1) {
        require(models_path + "/" + file);
    }
})