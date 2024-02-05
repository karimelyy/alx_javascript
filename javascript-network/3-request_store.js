const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const filePath = process.argv[3];

if (!url || !filePath) {
  console.error('Please provide both a valid URL and a file path as arguments.');
  process.exit(1);
}

// Perform the GET request to the specified URL
request.get(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }

  // Write the body content to the specified file path
  fs.writeFileSync(filePath, body, 'utf-8');

  console.log(`Content from ${url} has been saved to ${filePath}`);
  console.log(body); // Print the content to the console

  // If you want to see a clean line break between outputs
  console.log('\n');
});