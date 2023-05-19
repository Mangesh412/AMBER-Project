function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (name.trim() === "") {
        alert("Please enter your name.");
        return false;
    }

    if (email.trim() === "") {
        alert("Please enter your email.");
        return false;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (password.trim() === "") {
        alert("Please enter a password.");
        return false;
    }
    if (password.length < 8) {
        alert("Password should be at least 8 characters long.");
        return false;
    }

    if (!/[A-Z]/.test(password)) {
        alert("Password should contain at least one uppercase letter.");
        return false;
    }

    // Additional password validation if needed
    saveSignupData(name, email, password);
    window.location.href = "login.html";
    return true;
}
function saveSignupData(name, email, password) {
    var userData = {
        name: name,
        email: email,
        password: password
    };

    // Convert the JavaScript object to a JSON string
    var userDataJSON = JSON.stringify(userData);

    // Save the JSON string to local storage
    localStorage.setItem('userData', userDataJSON);
}
function validateEmail(email) {
    // A simple email validation regex pattern
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
