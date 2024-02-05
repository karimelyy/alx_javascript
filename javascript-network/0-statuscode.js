const request = require('request');

const url = process.argv[2];

if (!url) {
  console.error('Please provide a valid URL as the first argument.');
  process.exit(1);
}

// Perform the GET request
request.get(url, (error, response) => {
  if (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }

  // Display the status code
  console.log('code:', response.statusCode);
});