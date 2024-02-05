const request = require('request');

const apiUrl = process.argv[2];

if (!apiUrl) {
  console.error('Please provide a valid API URL as the first argument.');
  process.exit(1);
}

// Function to fetch data from the API with pagination support
const fetchFilmsData = (url, films = []) => {
  return new Promise((resolve, reject) => {
    request.get(url, (error, response, body) => {
      if (error) {
        reject(error);
        return;
      }

      const filmsData = JSON.parse(body);
      films.push(...filmsData.results);

      // Check if there is another page
      if (filmsData.next) {
        // Fetch the next page recursively
        fetchFilmsData(filmsData.next, films)
          .then(resolve)
          .catch(reject);
      } else {
        resolve(films);
      }
    });
  });
};

// Perform the GET request to the Star Wars API with pagination
fetchFilmsData(apiUrl)
  .then((filmsData) => {
    // Filter films where "Wedge Antilles" is present
    const filmsWithWedge = filmsData.filter((film) => {
      return film.characters.includes('https://swapi-api.alx-tools.com/api/people/18/');
    });

    // Display the number of films with "Wedge Antilles"
    console.log(filmsWithWedge.length);
  })
  .catch((error) => {
    console.error('Error:', error.message);
    process.exit(1);
  });