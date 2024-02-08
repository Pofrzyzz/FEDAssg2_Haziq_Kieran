// Event listener for form submission
document.getElementById("login-form").addEventListener("submit", function (event) {
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
            "x-apikey": "65c41ce986354f71f74644da",
            "cache-control": "no-cache"
        }
    };

    // Make the API request using Fetch API
    fetch(settings.url, {
        method: 'GET',
        headers: settings.headers
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(response => {
            if (response.length > 0 && response[0].password === password) {
                // Valid credentials, redirect to Main Page or perform other actions
                window.location.href = 'Main_Page.html';
            } else {
                // Invalid credentials, display an error message
                alert("Invalid username or password");
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error.message);
        });
}
