const pool = require('../configSettings');
let deviceDB = {};



//1)create Device
deviceDB.createDevice = (data) => {
    return new Promise((resolve, reject) => {
        pool.query(`INSERT INTO deviceportal (studentId, deviceId) VALUES (?, ?)`,
            [data.studentId, data.deviceId],
            (err, results) => {
                if (err) { return reject(err); }
                else { return resolve(results); }
            });
    })
}

//2)update Device by DeviceNumber
deviceDB.updateDevice = (data) => {
    return new Promise((resolve, reject) => {
        pool.query(`UPDATE deviceportal SET deviceId = ? WHERE studentId = ?`,
            [data.deviceId, data.studentId],
            (err, results) => {
                if (err) { return reject(err); }
                else { return resolve(results); }
            })
    })
}



//3)remove Device by DeviceNumber

deviceDB.deleteDevice = (data) => {
    return new Promise((resolve, reject) => {
        pool.query(`DELETE FROM deviceportal WHERE studentId = ?`, [data.studentId], (err, results) => {
            if (err) { return reject(err); }
            else { return resolve(results); }
        });
    })
}

//4)get Device details 
deviceDB.searchDevice = (studentId) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM deviceportal WHERE studentId = ?`, [studentId], (err, results1) => {
            if (err) { return reject(err); }
            else { return resolve(results1); }
        });

    });
}

module.exports = deviceDB;


