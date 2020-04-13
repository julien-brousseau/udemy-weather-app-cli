/*
  WEATHER app

  Usage: node app.js Montréal
*/

// Dev dependency for console printing
const chalk = require("chalk");

// External modules
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

// Grab address from URL (1st argument)
const address = process.argv[2];

// Calling the geocode module with command line location
geocode(address, (err, { latitude, longitude, location }) => {

  // Catch invalid address
  if (!address) return console.log(chalk.red.inverse("Invalid address"))

  // Catch errors
  if (err) return console.log(chalk.red.inverse("Error: " + err))

  // Call forecast module
  forecast(latitude, longitude, (err, forecastData) => {

    // Catch errors
    if (err) return console.log(chalk.red.inverse("Error: " + err))

    // Print data
    console.log(chalk.green.inverse("Location: " + location))
    console.log(chalk.green.inverse("Temperature: " + forecastData.temperature))
    console.log(chalk.green.inverse("Summary: " + forecastData.summary))

  })
})
