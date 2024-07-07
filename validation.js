
document.addEventListener("DOMContentLoaded", function () {
    // Get the input field
    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");

    // Get the validation message elements
    const usernameMsg = document.getElementById("username-msg");
    const emailMsg = document.getElementById("email-msg");
    const passwordMsg = document.getElementById("password-msg");
    const confirmPasswordMsg = document.getElementById("confirm-password-msg");

    // Add event listener for input event 
    usernameInput.addEventListener("input", function () {
        validateUsername();
    });
    emailInput.addEventListener("input", function () {
        validateEmail();
    });
    passwordInput.addEventListener("input", function () {
        validatePassword();
    });
    confirmPasswordInput.addEventListener("input", function () {
        validateConfirmPassword();
    });

    const form = document.getElementById("registration-form");
    form.addEventListener("submit", validateForm);


});

// Function to validate username
function validateUsername() {
    const usernameInput = document.getElementById("username");
    const usernameMsg = document.getElementById("username-msg");
    const username = usernameInput.value.trim();
    const isValidLength = username.length >= 3;
    const isValidFormat = /^[a-zA-Z]+$/.test(username);

    usernameMsg.innerHTML = "";


    if (!isValidLength) {
        usernameMsg.innerHTML += "<li style='color: red'> ✘ Username must be at least 3 characters long.</li>";
    } else {
        usernameMsg.innerHTML += "<li style='color: green'> ✔ Username is at least 3 characters long.</li>";
    }

    if (!isValidFormat) {
        usernameMsg.innerHTML += "<li style='color: red'> ✘ Username must contain only alphabets.</li>";
    } else {
        usernameMsg.innerHTML += "<li style='color: green'> ✔ Username contains only alphabets.</li>";
    }


    if (username && isValidLength && isValidFormat) {
        usernameInput.classList.remove("invalid");
        usernameInput.classList.add("valid");
    } else {
        usernameInput.classList.remove("valid");
        usernameInput.classList.add("invalid");
    }
}

// Function to validate email
function validateEmail() {
    const emailInput = document.getElementById("email");
    const emailMsg = document.getElementById("email-msg");
    const email = emailInput.value.trim();
    const isValidFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    emailMsg.innerHTML = "";

    if (!isValidFormat) {
        emailMsg.innerHTML += "<li style='color: red'> ✘ Invalid email format.</li>";
    } else {
        emailMsg.innerHTML += "<li style='color: green'> ✔ Valid email format.</li>";
    }

    if (isValidFormat) {
        emailInput.classList.remove("invalid");
        emailInput.classList.add("valid");
    } else {
        emailInput.classList.remove("valid");
        emailInput.classList.add("invalid");
    }
}

// Function to validate password
function validatePassword() {
    const passwordInput = document.getElementById("password");
    const passwordMsg = document.getElementById("password-msg");
    const password = passwordInput.value.trim();
    const isValidLength = password.length >= 6;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    passwordMsg.innerHTML = "";

    if (!isValidLength) {
        passwordMsg.innerHTML += "<li style='color: red'> ✘ Password must be at least 6 characters long.</li>";
    } else {
        passwordMsg.innerHTML += "<li style='color: green'> ✔ Password is at least 6 characters long.</li>";
    }

    if (!hasUppercase) {
        passwordMsg.innerHTML += "<li style='color: red'> ✘ Password must contain at least one uppercase letter.</li>";
    } else {
        passwordMsg.innerHTML += "<li style='color: green'> ✔ Password contains at least one uppercase letter.</li>";
    }

    if (!hasLowercase) {
        passwordMsg.innerHTML += "<li style='color: red'> ✘ Password must contain at least one lowercase letter.</li>";
    } else {
        passwordMsg.innerHTML += "<li style='color: green'> ✔ Password contains at least one lowercase letter.</li>";
    }

    if (!hasDigit) {
        passwordMsg.innerHTML += "<li style='color: red'> ✘ Password must contain at least one digit.</li>";
    } else {
        passwordMsg.innerHTML += "<li style='color: green'> ✔ Password contains at least one digit.</li>";
    }

    if (!hasSpecialChar) {
        passwordMsg.innerHTML += "<li style='color: red'> ✘ Password must contain at least one special character.</li>";
    } else {
        passwordMsg.innerHTML += "<li style='color: green'> ✔ Password contains at least one special character.</li>";
    }

    if (isValidLength && hasUppercase && hasLowercase && hasDigit && hasSpecialChar) {
        passwordInput.classList.remove("invalid");
        passwordInput.classList.add("valid");
    } else {
        passwordInput.classList.remove("valid");
        passwordInput.classList.add("invalid");
    }
}

// Function to validate confirm password
function validateConfirmPassword() {
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");
    const confirmPasswordMsg = document.getElementById("confirm-password-msg");
    const confirmPassword = confirmPasswordInput.value.trim();
    const password = passwordInput.value.trim();

    confirmPasswordMsg.innerHTML = "";

    if (!confirmPassword) {
        confirmPasswordMsg.innerHTML += "<li style='color: red'> ✘ Confirm Password is required.</li>";
    } else if (confirmPassword !== password) {
        confirmPasswordMsg.innerHTML += "<li style='color: red'> ✘ Passwords do not match.</li>";
    } else {
        confirmPasswordMsg.innerHTML += "<li style='color: green'> ✔ Passwords match.</li>";
    }

    if (confirmPassword === password && confirmPassword) {
        confirmPasswordInput.classList.remove("invalid");
        confirmPasswordInput.classList.add("valid");
    } else {
        confirmPasswordInput.classList.remove("valid");
        confirmPasswordInput.classList.add("invalid");
    }
}
// Function to encryption 
function hashPassword(password) {
    const hash = CryptoJS.SHA512(password);

    return hash.toString(CryptoJS.enc.Hex);
}
function hashConfirmPassword(confirmPassword) {
    const hash = CryptoJS.SHA512(confirmPassword);

    return hash.toString(CryptoJS.enc.Hex);
}
// Function to check the number of selected subjects
function checkSubjectCount() {
    const subjectCheckboxes = document.querySelectorAll(".subject-checkbox");
    let selectedCount = 0;

    subjectCheckboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            selectedCount++;
        }
    });

    const subjectMsg = document.getElementById("subject-msg");
    subjectMsg.innerHTML = "";

    if (selectedCount < 3) {
        subjectMsg.innerHTML = "<li style='color: red'> ✘ Select at least three subjects.</li>";
    } else {
        subjectMsg.innerHTML = "<li style='color: green'> ✔ You have selected at least three subjects.</li>";
    }
}

function validateForm(event) {
    event.preventDefault();


    validateUsername();
    validateEmail();
    validatePassword();
    validateConfirmPassword();
    checkSubjectCount();

    const invalidFields = document.querySelectorAll(".input-field.invalid");
    if (invalidFields.length > 0) {
        invalidFields.forEach(function (field) {
            const fieldMsg = field.nextElementSibling;
            if (field.value.trim() === "") {
                fieldMsg.innerHTML = "<li style='color: red'> ✘ This field is required.</li>";
            }
        });

        return false;
    } else {

        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const confirmPassword = document.getElementById("confirm-password").value.trim();
        const subjectCheckboxes = document.querySelectorAll(".subject-checkbox");
        const selectedSubjects = [];

        const hashedPassword = hashPassword(password);
        const hashConfirmPassword = hashPassword(confirmPassword);

        subjectCheckboxes.forEach(function (checkbox) {
            if (checkbox.checked) {
                selectedSubjects.push(checkbox.name);
            }
        });
        let myObject = {
            username: username,
            email: email,
            password: hashedPassword,
            confirmPassword: hashConfirmPassword,
        };

        console.log(myObject);
        console.log("Selected Subjects:", selectedSubjects);
        console.log("Username:", username);
        console.log("Email:", email);
        console.log("Password (hashed):", hashedPassword);
        console.log("Confirm Password:", hashConfirmPassword);

        return true;
    }
}