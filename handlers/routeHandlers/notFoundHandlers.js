/*
 * Title: Not Found Handler
 * Description: 404 Not Found Handler
 * Author: Masrafi Anam
 * Date: 08/07/2025
 *
 */
// module scaffolding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
    callback(404, {
        message: 'Your requested URL was not found!',
    });
};

module.exports = handler;
