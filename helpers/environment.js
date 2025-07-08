/*
 * Title: Environments
 * Description: Handle all environment related things
 * Author: Masrafi Anam
 * Date: 08/07/2025
 *
 */

// dependencies

// module scaffolding
const environments = {};

// staging environment
environments.staging = {
    port: 3000,
    envName: 'staging',
};

// production environment
environments.production = {
    port: 4000,
    envName: 'production',
};

// determine which environment was passed
// eslint-disable-next-line prettier/prettier
const currentEnvironment = typeof process.env.NODE_ENV === 'string' ? process.env.NODE_ENV : 'staging';

// export corresponding environment object
// eslint-disable-next-line prettier/prettier
const environmentToExport = typeof environments[currentEnvironment] === 'object'
        ? environments[currentEnvironment]
        : environments.staging;

// export module
module.exports = environmentToExport;
