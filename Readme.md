Sure, here is an updated README document with the start script added:
Earthquake API
This is a simple Express app that provides an API for fetching earthquakes from the AFAD website.
Installation
To install the app, run the following command:
" npm install "
Usage
To start the app, run the following command:
" npm run start "
The API can then be accessed at http://localhost:3000/api/earthquakes.
To fetch all earthquakes, simply make a GET request to the API endpoint.
curl http://localhost:3000/api/earthquakes

To filter earthquakes by location, pass a location query parameter to the API endpoint.
curl http://localhost:3000/api/earthquakes?location=İzmir

The API will return a JSON object containing an array of earthquake objects. Each earthquake object will have the following properties:
id: The ID of the earthquake.
location: The location of the earthquake.
date: The date of the earthquake.
scale: The magnitude of the earthquake.
Example
The following example shows how to fetch all earthquakes and print them to the console:
JavaScript
const axios = require('axios');

async function fetchEarthquakes() {
  const response = await axios.get('http://localhost:3000/api/earthquakes');
  const earthquakes = response.data;

  earthquakes.forEach((quake) => {
    console.log(`${quake.id} - ${quake.location} (${quake.scale})`);
  });
}

fetchEarthquakes();

License
This app is licensed under the MIT license.
Contributing
Contributions are welcome! To contribute, please create a pull request on the GitHub repository.
Start script
To start the app in development mode, run the following command:
npm run start

This will start the app using nodemon, which will automatically restart the app whenever any changes are made to the source files.

