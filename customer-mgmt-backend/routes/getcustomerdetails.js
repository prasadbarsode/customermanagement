const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Customer = require('../model/customerdetail');

var mongojs = require('mongojs')
var db = mongojs('mongodb://localhost:27017/nordea', ['sampleCustomerData']);

//Get All Customer Details
router.get('/customerdetails', function(req, res, next){
    //res.send('Customer Details');
    db.sampleCustomerData.find(function(err, sampleCustomerData){
        if(err){
            res.send(err);
        }
        res.json(sampleCustomerData);
    });
});

// Get Individual Customer Details
router.get('/customerdetails/:id', function(req, res, next){
    db.sampleCustomerData.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, individualCustomerData){
        if(err){
            res.send(err);
        }
        res.json(individualCustomerData);
    });
});

// Update Customer Details
router.put('/customerdetails/:id', function(req, res, next){
    var customerDetails = req.body;
    var updCustomerDetail = {};
    
    if(customerDetails.type==2){
        updCustomerDetail.id = customerDetails.id;
        updCustomerDetail.type = customerDetails.type;
        updCustomerDetail.name = customerDetails.name;
        updCustomerDetail.country = customerDetails.country;
        updCustomerDetail.websiteUrl = customerDetails.websiteUrl;
        updCustomerDetail.numberOfEmployees = customerDetails.numberOfEmployees;
        updCustomerDetail.contractExpiryDate = customerDetails.contractExpiryDate;
        updCustomerDetail.annualTurnover = customerDetails.annualTurnover;
        updCustomerDetail.complianceChecked = customerDetails.complianceChecked;
    }else if(customerDetails.type==1){
        updCustomerDetail.id = customerDetails.id;
        updCustomerDetail.type = customerDetails.type;
        updCustomerDetail.name = customerDetails.name;
        updCustomerDetail.country = customerDetails.country;
        updCustomerDetail.websiteUrl = customerDetails.websiteUrl;
        updCustomerDetail.numberOfEmployees = customerDetails.numberOfEmployees;
        updCustomerDetail.contractExpiryDate = customerDetails.contractExpiryDate;
    }
    
    if(!updCustomerDetail){
        res.status(400);
        res.json({
            "error":"Bad Data"
        });
    } else {
        db.sampleCustomerData.update({_id: mongojs.ObjectId(req.params.id)},updCustomerDetail, {}, function(err, customerDetails){
        if(err){
            //res.send(err);
            res.json({success: false, msg:'Failed to update customer details'});
        }
        //res.json(airline);
        res.json({success: true, msg:'Customer details successfully updated'});
    });
    }
});

module.exports = router;