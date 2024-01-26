document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("login-form").addEventListener("submit", function (e) {
      e.preventDefault();

      const loginEmail = document.getElementById("login-email").value;
      const loginPassword = document.getElementById("login-password").value;

      // Fetch user data based on the provided email
      fetch(`https://your-restdb-api.com/users?q={"email":"${loginEmail}"}`, {
          method: "GET",
          headers: {
              "Content-Type": "application/json",
              "x-apikey": "65b3bf7bd6d7327e91daa3cc",
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
              // Handle successful login, e.g., redirect to another page
              console.log("Login successful");
              window.location.href = "/dashboard"; // Redirect to the dashboard page
          } else {
              throw new Error("Invalid password");
          }
      })
      .catch(error => {
          // Handle login error
          console.error("Login error", error);
      });

      // Fetch weather data from Weatherbit API
      const apiKey = 'f3e93aed08c04255bf616e146986c110';
      const city = 'Singapore'; 
      const weatherEndpoint = `https://api.weatherbit.io/v2.0/current?city=${city}&key=${apiKey}`;

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
  });
});
