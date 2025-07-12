/*
 * Title: Routes
 * Description: Application Routes
 * Author: Sumit Saha ( Learn with Sumit )
 * Date: 11/15/2020
 *
 */

// dependencies
const { sampleHandler } = require('./handlers/routeHandlers/sampleHandlers');
const { userHandler } = require('./handlers/routeHandlers/uaerHandler');
const { tokenHandler } = require('./handlers/routeHandlers/tokenHandlers');

const routes = {
    sample: sampleHandler,
    user: userHandler,
    token: tokenHandler,
};

module.exports = routes;
