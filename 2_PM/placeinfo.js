/* TODO: Write a program which takes in a place name via the command line and 
/ returns the following string, formatted with the appropriate values:

'INPUTTED_PLACE is located at coordinates RETURNED_COORDINATES, at the address RETURNED_ADDRESS.' */
const module1 = require('@google/maps')
const key = require('./config')
const googleMapsClient = require('./google_api')

const INPUTTED_PLACE = 'Harvard'

googleMapsClient.findPlace({input: INPUTTED_PLACE,
inputtype: "textquery"}).asPromise()
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });

const RETURNED_COORDINATES = "yay"
const RETURNED_ADDRESS = "huh"
console.log(`\n\n${INPUTTED_PLACE} is located at coordinates ${RETURNED_COORDINATES}, at the address ${RETURNED_ADDRESS}.\n\n`)