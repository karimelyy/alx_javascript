const request = require('request');

const apiUrl = process.argv[2];

if (!apiUrl) {
  console.error('Please provide a valid API URL as the first argument.');
  process.exit(1);
}

// Perform the GET request to the specified API URL
request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }

  // Parse the JSON response
  const todos = JSON.parse(body);

  // Filter completed tasks and count them by user id
  const completedTasksByUser = todos.reduce((acc, todo) => {
    if (todo.completed) {
      acc[todo.userId] = (acc[todo.userId] || 0) + 1;
    }
    return acc;
  }, {});

  console.log(completedTasksByUser);
});