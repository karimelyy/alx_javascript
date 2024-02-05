const request = require('request');

const movieId = process.argv[2];

if (!movieId) {
  console.error('Please provide a valid movie ID as the first argument.');
  process.exit(1);
}

const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

// Perform the GET request to the Star Wars API
request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }

  // Parse the JSON response
  const movieData = JSON.parse(body);

  // Display the title if the movie data is available
  if (movieData.title) {
    console.log(movieData.title);
  } else {
    console.error('Movie not found for ID:', movieId);
  }
});