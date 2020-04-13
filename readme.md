# Simple weather CLI
A simple weather application built as the first project during the Udemy class [The Complete Node.js Developer Course (3rd Edition)](https://www.udemy.com/course/the-complete-nodejs-developer-course-2/) by Andrew Mead.

## Installation
Just run `npm install` to get dependancies

You need both a Mapbox and Darksky API token to use the application.
Declare these tokens in the `config/tokens.env`, using the variables `MAPBOX_API` and `DARKSKY_API`.

## Quick start
Run the terminal command `npm run get-weather` in the application directory, followed by with a location string to print the weather forecast for that location.

Example:

    npm run get-weather "Montreal Canada"
