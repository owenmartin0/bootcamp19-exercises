// TODO - create client object for Google API connection which can be exported

const key = require('./config')

const googleMapsClient = require('@google/maps').createClient({
    key: key.apiKey,
    Promise: Promise
  });

module.exports = googleMapsClient