var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var DataSchema = new mongoose.Schema({
    name: {type: String, required:[true, "name is required"], minLength:3},
    description: {type: String, required:[true, "description is required"], minLength:3},
}, {timestamps: true})


mongoose.model('Data', DataSchema);

module.exports = {data: mongoose.model('Data')};
