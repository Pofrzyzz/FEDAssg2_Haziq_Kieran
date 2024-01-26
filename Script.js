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
    });
});
