/*
 * Title: Uptime Monitoring Application
 * Description: A RESTFul API to monitor up or down time of user defined links
 * Author: Masrafi Anam
 * Date: 07/07/2025
 *
 */

// dependencies
const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');
const environment = require('./helpers/environment');
const data = require('./lib/data');
const { sendTwilioSms } = require('./helpers/notification');

// app object - module scaffolding
const app = {};

// @TODO remove later
sendTwilioSms('01911111111', 'Hello world', (err) => {
    console.log('this is the error', err);
});

// configuration
app.config = {
    port: 3000,
};

// testing file system
// data.create('test', 'newFile', { 'name': 'Bangladesh', 'language': 'Bangla' }, (err)=>{
//  console.log('error was', err);
// });
// data.read('test', 'newFile', ( err, result ) => {
//  console.log(err, result);
// });
// data.update('test', 'newFile', { name: 'Soudi Arabia', language: 'Arabic' }, ( err ) =>{
//     console.log(err);
// });
// data.delete('test', 'newFile', (err) => {
//     console.log(err);
// });

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(environment.port, () => {
        console.log(`listening to port ${environment.port}`);
    });
};

// handle Request Response
app.handleReqRes = handleReqRes;

// start the server
app.createServer();
