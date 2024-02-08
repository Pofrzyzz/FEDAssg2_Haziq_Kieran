// SignUp.js

function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var passwordError = document.getElementById('passwordError');

    // Check if the username is a valid email
    if (!validateEmail(username)) {
        alert("Please enter a valid email address for the username.");
        return false;
    }

    // Check if the password is at least 8 characters long
    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return false;
    }

    // Check if the password matches the confirm password
    if (password !== confirmPassword) {
        passwordError.innerText = "Passwords do not match.";
        return false;
    }

    // Create an entry in the restdb
    createEntryInDB(username, password);

    // Display loading page
    showLoadingPage();
}

function createEntryInDB(username, password) {
    var jsondata = {"username": username,"password": password};
    var settings = {
    dataType: "json",
    "async": true,
    "crossDomain": true,
    "url": "https://fedassg2-5404.restdb.io/rest/login",
    "method": "POST",
    "headers": {
        "content-type": "application/json",
        "x-apikey": "65c41ce986354f71f74644da",
        "cache-control": "no-cache"
    },
    "processData": false,
    "data": JSON.stringify(jsondata)
    }

    $.ajax(settings).done(function (response) {
    console.log(response);
    });
}

function validateEmail(email) {
    // Regular expression to validate email format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showLoadingPage() {
    window.location.href = "../htmlCode/loadingPage.html";
}

function login() {
    window.location.href = '../htmlCode/Login_Page.html'
}