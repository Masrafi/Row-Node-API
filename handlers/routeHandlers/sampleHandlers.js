/*
 * Title: Sample Handler
 * Description: Sample Handler
 * Author: Masrafi Anam
 * Date: 08/07/2025
 *
 */
// module scaffolding
const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
    console.log(requestProperties);

    callback(200, {
        message: 'This is a sample url',
    });
};

module.exports = handler;
