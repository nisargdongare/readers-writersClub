const express = require('express');
const deviceRouter = express.Router();
const SecretKey = "1aBjAEo0QgqCWZDwIwDiMmLyGQxFos";
const deviceDB = require('../db/deviceDB');


//1)create Device
deviceRouter.post('/', async (req, resp, next) => {
    try {
        console.log(req.query);
        if(req.query.secret_token === SecretKey){
            let data = {
                studentId: req.body.studentId,
                deviceId: req.body.deviceId
            }
            let results = await deviceDB.createDevice(data);
            resp.send(results);
        }else {resp.json([]);}
    } catch (err) {
        console.log(err);
        resp.status(500).json(err.sqlMessage);
    }
});


//2)update Device by DeviceNumber
deviceRouter.put('/', async (req, resp, next) => {
    try {
        if(req.query.secret_token === SecretKey){
            let data = {
                studentId: req.body.studentId,
                deviceId: req.body.deviceId
            }
            let results = await deviceDB.updateDevice(data);
            resp.send(results);
        }else {resp.json([]);}
    } catch (err) {
        console.log(err);
        resp.status(500).json(err.sqlMessage);
    }
});

//3)remove Device by DeviceNumber
deviceRouter.delete('/', async (req, resp, next) => {
    try {
        let data = {studentId: req.body.studentId}
        if(req.query.secret_token === SecretKey){
            let results = await deviceDB.deleteDevice(data);
            resp.json(results);
        }else {resp.json([]);}
    } catch (err) {
        console.log(err);
        resp.status(500).json(err.sqlMessage);
    }
});


//4)get Device details & send OTP
deviceRouter.get('/:studentId', async (req, resp, next) => {
    try {
        if(req.query.secret_token === SecretKey){
            let results = await deviceDB.searchDevice(req.params.studentId);
            resp.json(results);
        }else {resp.json([]);}
    } catch (err) {
        console.log(err);
        resp.status(500).json(err.sqlMessage);
    }
});


module.exports = deviceRouter;