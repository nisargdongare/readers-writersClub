require('dotenv').config();
const deviceRoutes = require('./server/routes/deviceRouter'); 
var cors = require('cors');




var express = require('express');
var app = express();
     
// dev only
app.use(cors());
app.use(express.json());
app.use('/api/device',deviceRoutes);

//app.listen(3000, '192.168.2.103');

app.listen(process.env.APP_PORT,()=>{console.log("Server started with port:"+ process.env.APP_PORT );});


// API list
				
// Devices	    1	create Device	                                        post	/api/devices/                               
// 	            2	update Device by studentId	                            put	    /api/devices/
// 	            3	remove Device by studentId	                            delete	/api/devices/
// 	            4	get Device details by studentId	                        get	    /api/devices/<studentId>