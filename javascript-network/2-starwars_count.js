const request = require('request');

const apiUrl = process.argv[2];

if (!apiUrl) {
  console.error('Please provide a valid API URL as the first argument.');
  process.exit(1);
}

// Perform the GET request to the Star Wars API
request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }

  // Parse the JSON response
  const filmsData = JSON.parse(body);

  // Filter films where "Wedge Antilles" is present
  const filmsWithWedge = filmsData.results.filter((film) => {
    return film.characters.includes('https://swapi-api.alx-tools.com/api/people/18/');
  });

  // Display the number of films with "Wedge Antilles"
  console.log(filmsWithWedge.length);
});