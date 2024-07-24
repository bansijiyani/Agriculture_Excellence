function loginUser() {
    var password = document.getElementsByName("password")[0].value;
    var cpassword = document.getElementsByName("cpassword")[0].value;

    if (password === cpassword) {
        alert("Logged in successfully!");
        // Redirect to the main page (you can replace "index.html" with your actual main page)
        window.location.href = "main page.html";
    } else {
        alert("Please enter password and Confirm Password Must be same ");
    }
}