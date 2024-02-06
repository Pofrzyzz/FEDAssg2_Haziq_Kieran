// Move initMap function outside the event listener to make it global
function initMap() {
    // Initial coordinates (placeholder)
    const initialLatLng = { lat: 1.3539707660675049, lng: 103.8182373046875 };

    // Create a new map instance
    const map = new google.maps.Map(document.getElementById('map'), {
        center: initialLatLng,
        zoom: 14 // Adjust the zoom level as needed
    });

    // Create a marker and place it on the map
    const marker = new google.maps.Marker({
        position: initialLatLng,
        map: map,
        title: 'My location'
    });

    // Function to navigate to a specific location on the map
    function navigateToLocation(coordinates) {
        map.setCenter(coordinates);
        marker.setPosition(coordinates);
    }

    // Event listener for "Locate" buttons
    const locateButtons = document.querySelectorAll('.locate-button');
    locateButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Extract coordinates from the dataset (you can set these in HTML)
            const lat = parseFloat(button.dataset.latitude || 0);
            const lng = parseFloat(button.dataset.longitude || 0);
            const coordinates = { lat, lng };

            // Navigate to the specified location on the map
            navigateToLocation(coordinates);
        });
    });
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("login-form").addEventListener("submit", function (e) {
        e.preventDefault();

        const loginEmail = document.getElementById("login-email").value;
        const loginPassword = document.getElementById("login-password").value;

        // Validate that both email and password are provided
        if (!loginEmail || !loginPassword) {
            console.error("Please enter both email and password");
            return;
        }

        // Fetch user data based on the provided email
        fetch(`https://your-restdb-api.com/users?q={"email":"${loginEmail}"}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "x-apikey": "65b3bf7bd6d7327e91daa3cc", // Replace with your RestDB API key
            },
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Invalid credentials");
            }
            return response.json();
        })
        .then(users => {
            // Check if a user with the provided email exists
            if (users.length === 0) {
                throw new Error("User not found");
            }

            // For simplicity, we assume the password is stored in plain text in the database
            const storedPassword = users[0].password;

            // Check if the provided password matches the stored password
            if (loginPassword === storedPassword) {
                // Handle successful login
                console.log("Login successful");
                // Redirect to the dashboard page
                window.location.href = "/dashboard";
            } else {
                throw new Error("Invalid password");
            }
        })
        .catch(error => {
            // Handle login error
            console.error("Login error", error);
        });

        // Fetch weather data from Weatherbit API
        const weatherApiKey = 'YOUR_WEATHERBIT_API_KEY';
        const weatherCity = 'Singapore'; 
        const weatherEndpoint = `https://api.weatherbit.io/v2.0/current?city=${weatherCity}&key=${weatherApiKey}`;

        async function fetchWeatherData() {
            try {
                const response = await fetch(weatherEndpoint);
                const data = await response.json();

                // Extract relevant weather information (example: temperature)
                const temperature = data.data[0].temp;

                // Display the weather information on the page
                const weatherDataElement = document.getElementById('weather-data');
                weatherDataElement.innerHTML = `Temperature: ${temperature}°C`;
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        }

        // Call the function to fetch weather data
        fetchWeatherData();

        // Call the initMap function
        initMap();
    });
});

function f_bpage() {
    window.location.href = 'F&B_Page.html';
}

function signup() {
    window.location.href = 'Signup_Page.html'
}

function login() {
    window.location.href = 'Login_Page.html'
}