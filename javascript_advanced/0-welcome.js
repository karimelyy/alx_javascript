function welcome(firstName, lastName) {
  // Concatenate firstName and lastName with a space in between
  var fullName = firstName + ' ' + lastName;

  // Nested function to display the welcome message
  function displayFullName() {
    // Display an alert with the welcome message
    alert('Welcome ' + fullName + '!');
  }

  // Call the nested function to display the welcome message
  displayFullName();
}

// Call the welcome function with example values
welcome('Holberton', 'School');