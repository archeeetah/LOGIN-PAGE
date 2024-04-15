//Validation code for inputs
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form");
    const emailInput = document.querySelector("input[type='text']");
    const passwordInput = document.querySelector("input[type='password']");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission
        
        // Perform basic validation
        if (validateEmail(emailInput.value) && validatePassword(passwordInput.value)) {
            alert("Form submitted successfully!");
        } else {
            // If validation fails, you can display error messages or handle it accordingly
            alert("Please enter valid email and password!");
        }
    });
    
    function validateEmail(email) {
        // Basic email validation using regular expression
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function validatePassword(password) {
        // Basic password validation - assuming minimum length is 6 characters
        return password.length >= 6;
    }
});


