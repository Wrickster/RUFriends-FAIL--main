// public/script.js
document.getElementById('greetForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    const username = document.getElementById('username').value;
    const greetingMessage = `Hello, ${username}! Welcome to the interactive website!`;
    document.getElementById('greeting').innerText = greetingMessage; // Display the greeting
});
