document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Clear previous errors
    document.querySelectorAll('.error').forEach(function(error) {
        error.textContent = '';
    });

    let hasError = false;

    // Get form values
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const userId = document.getElementById('userId').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    // Validate first name
    if (!firstName) {
        document.getElementById('firstNameError').textContent = 'First Name is required';
        hasError = true;
    }

    // Validate last name
    if (!lastName) {
        document.getElementById('lastNameError').textContent = 'Last Name is required';
        hasError = true;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        document.getElementById('emailError').textContent = 'Email is required';
        hasError = true;
    } else if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Email format is invalid';
        hasError = true;
    }

    // Validate user ID
    if (!userId) {
        document.getElementById('userIdError').textContent = 'User ID is required';
        hasError = true;
    }

    // Validate password
    if (!password) {
        document.getElementById('passwordError').textContent = 'Password is required';
        hasError = true;
    }

    // Validate confirm password
    if (!confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Confirm Password is required';
        hasError = true;
    } else if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match';
        hasError = true;
    }

    // If no errors, submit the form
    if (!hasError) {
        alert('Form submitted successfully!');
        // Here you can add the code to submit the form data to the server
    }
});
