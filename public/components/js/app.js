var user = document.getElementById("user").required;
var ID = document.getElementById("ID").required;
var garantia = document.getElementById("garantia");
var fecha = document.getElementById("fecha");

function validateEmail(user) {
    // regular expression for email validation
    const pattern = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

    // return true if the email matches the pattern, false otherwise.
    return pattern.test(user);
}

// Emails to test
const emails = ["answers@educative.io", "answers@educative"];

for (let i = 0; i < emails.length; i++) {

    if (validateEmail(emails[i])) {
        console.log("The email \"" + emails[i] + "\" is a valid email address.");
    } else {
        console.log("The email \"" + emails[i]+ "\" is an invalid email address.");
    }
}

document.getElementById("submit").innerHTML;