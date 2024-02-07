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

function mainpage() {
    window.location.href = 'htmlCode/Main_Page.html';
}

function f_bpage() {
    window.location.href = 'htmlCode/F&B_Page.html';
}

function signup() {
    window.location.href = 'htmlCode/Signup_Page.html'
}

function login() {
    window.location.href = 'htmlCode/Login_Page.html'
}

function hotelpage(){
    window.location.href = 'htmlCode/Hotel_Page.html'
}

function attractionPage(){
    window.location.href = 'htmlCode/Attraction_Page.html'
}

// Script.js

function validateForm() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return false;
    }

    // Continue with form submission
    window.location.href = 'htmlCode/Main_Page.html';
    return false;  // Prevent form submission since we're redirecting manually
}



