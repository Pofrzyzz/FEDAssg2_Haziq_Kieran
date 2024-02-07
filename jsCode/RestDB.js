// Event listener for form submission
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the entered username and password
    var username = document.getElementById("login-email").value;
    var password = document.getElementById("login-password").value;

    // Validate the login credentials
    validateLogin(username, password);
});

function validateLogin(username, password) {
    // API request settings
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://fedassg2-5404.restdb.io/rest/login?q={\"username\":\"" + username + "\",\"password\":\"" + password + "\"}",
        "method": "GET",
        "headers": {
            "content-type": "application/json",
            "x-apikey": "65b3bf7bd6d7327e91daa3cc",
            "cache-control": "no-cache"
        }
    };

    // Make the API request
    $.ajax(settings).done(function (response) {
        if (response.length > 0) {
            // Valid credentials, redirect to Main Page or perform other actions
            window.location.href = 'Main_Page.html';
        } else {
            // Invalid credentials, display an error message or take appropriate action
            alert("Invalid username or password");
        }
    });
}
