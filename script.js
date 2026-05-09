const form = document.getElementById("user-registration-form");
 
form.addEventListener("submit", function(event) {

    // Prevent form submission
    event.preventDefault();

    // Get input values
    const fullname = document.getElementById("fullname").value.trim();
    const emailaddress = document.getElementById("emailaddress").value.trim();
    const password = document.getElementById("password").value;
    const confirmpassword =document.getElementById("confirmpassword").value;
    const age = document.getElementById("age").value;

    // Full name validation
    if (fullname === "") {
        alert("Full name cannot be empty.");
        return;
    }

    // Check if at least 2 words
    const nameparts = fullname.split(" ");

    if (nameparts.length < 2) {
        alert("Please enter at least first name and last name.");
        return;
    }

    // Email address validation
    const emailaddressPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailaddressPattern.test(emailaddress)) {
        alert("Please enter a valid email address.");
        return;
    }

    //Password validation
    const passwordPattern = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_]).{8,}$/;

    if (!passwordPattern.test(password)) {
        alert("Password must be at least 8 characters and include an uppercase letter, number, and special character."
                );
        return;
    }

    if (password != confirmpassword) {
        alert("Passwords do not match.");
        return;
    } 

    // Age validation

    if (age < 18){
        alert("You must be at least 18 years old");
        return;
    }

    // If all validations pass
    alert("Form submitted successfully!");

});
