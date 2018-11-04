const mongoose = require('mongoose');
const config = require('../config/database');

//Customer schema
const CustomerSchema = new mongoose.Schema({
    id:{
        type: String
    },
    type: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    websiteUrl: {
        type: String,
    },
    numberOfEmployees: {
        type: Number,
        required: true
    },
    contractExpiryDate: {
        type: String,
        required: true
    },
    annualTurnover: {
        type: Number,
        required: true
    },
    complianceChecked: {
        type: Boolean,
        required: true
    }
});

const Customer = module.exports = mongoose.model('Customer', CustomerSchema);

module.exports.getUserById = function(id, callback){
    Customer.findById(id, callback);
}