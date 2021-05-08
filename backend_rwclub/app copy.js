require('dotenv').config();
const userRoutes = require('./server/routes/userRouter'); 
const accountRoutes = require('./server/routes/accountRouter');
const roomRoutes = require('./server/routes/roomRouter');
const deviceRoutes = require('./server/routes/deviceRouter');
const deviceSeriesRoutes = require('./server/routes/deviceSeriesRouter');
var cors = require('cors');




var express = require('express');
var app = express();
     
// dev only
app.use(cors());

app.use(express.json());

app.use('/api/users',userRoutes);
app.use('/api/accounts',accountRoutes);
app.use('/api/rooms', roomRoutes);
app.use('/api/devices',deviceRoutes);
app.use('/api/devicesSeries',deviceSeriesRoutes);

//app.listen(3000, '192.168.2.103');

app.listen(process.env.APP_PORT,()=>{console.log("Server started with port:"+ process.env.APP_PORT );});


// API list				
// Folder Name	Sr No	Work to do	call Type	API Link
				
// users	    1	create user	                                        post	/api/users/                               
// 	            2	update user by userNumber	                        put	    /api/users/
// 	            3	remove user by userNumber	                        delete	/api/users/
// 	            4	get user details with OTP	                        get	    /api/users/<userNumber>
// 	            5	addUser by userNumber(if not available)	            post	/api/users/addUser/
// 	            6	get all users data by account No	                get	    /api/users/allUsers/
//              23  verify otp                                          put     /api/users/otp/
				
// accounts	    7	create account and adds admin to it	                post	/api/accounts/
// 	            8	update account details by accountNumber	            put	    /api/accounts/
// 	            9	remove account by final admin	                    delete	/api/accounts/
// 	            10	get available accounts of one user	                get	    /api/accounts/<userNumber>
// 	            11	swap admin	                                        put	    /api/accounts/admin/
//				24  account approve                                     put     /api/accounts/approve/

// rooms	    12	create room by room name	                        post	/api/rooms/
// 	            13	update room by roomId	                            put	    /api/rooms/
// 	            14	remove room from all users by room Id	            delete	/api/rooms/
// 	            15	get all room name by account number and usernumber	get	    /api/rooms/<accountNumber>/<userNumber>
//              22  assign rooms to usernumber by acc number            put     /api/rooms/permissions
				
// devices	    16	add device with new UDN & account Number	        post	/api/devices/
// 	            17	update switch status by udn & trigger MQTT	        put	    /api/devices/
// 	            18	remove device by udn	                            delete	/api/devices/
// 	            19	get device details by accountNumber	                get	    /api/devices/<accountNumber>
// 	            20	get device status & udn  by roomId	                get	    /api/devices/status/
//              27  add device to room                                  put     /api/devices/addToRoom/
//deviceSeries  21  get list of model Type                              get     /api/models