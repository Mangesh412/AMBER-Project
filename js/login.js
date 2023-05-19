function validateLoginForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Retrieve the signup data from local storage
    var userDataJSON = localStorage.getItem('userData');

    if (userDataJSON) {
        var userData = JSON.parse(userDataJSON);
        var savedEmail = userData.email;
        var savedPassword = userData.password;

        if (email === savedEmail && password === savedPassword) {
            alert("Login successful!");
            window.location.href="index.html";
            return true;
        }
    }

    alert("Invalid email or password.");
    return false;
}