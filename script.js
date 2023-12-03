document.addEventListener('DOMContentLoaded', function () {
    // Get the Instagram username from the URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');

    // Display the username on the webpage
    const usernameElement = document.getElementById('username');
    if (username) {
        usernameElement.textContent = username;
        
        // Save the username to a text file (Note: This is a client-side operation and has limitations)
        const textToSave = `Instagram Username: ${username}`;
        const blob = new Blob([textToSave], { type: 'text/plain' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'username.txt';
        a.textContent = 'Download Username';
        document.body.appendChild(a);
    }
});
