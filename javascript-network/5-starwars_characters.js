const request = require('request');

const movieId = process.argv[2];

if (!movieId) {
  console.error('Please provide a valid Movie ID as the first argument.');
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

  // Display characters for the given movie
  if (movieData.characters.length > 0) {
    movieData.characters.forEach((characterUrl) => {
      // Fetch character details
      request.get(characterUrl, (characterError, characterResponse, characterBody) => {
        if (characterError) {
          console.error('Error fetching character details:', characterError.message);
        } else {
          const characterData = JSON.parse(characterBody);
          console.log(characterData.name);
        }
      });
    });
  } else {
    console.log('No characters found for the given movie ID.');
  }
});