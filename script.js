function logIn() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    console.log("username=" + username + "\npassword=" + password);
}
function signUp() {
    let email = document.getElementById("email").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let cpassword = document.getElementById("confirm").value;
    let domain = email.split("@")[1];
    let isAllowed = domain == "rocklandschools.org";
    if (!isAllowed) {
        document.getElementById("emaildiv").innerHTML = "Invalid email";
    } else {
        document.getElementById("emaildiv").innerText = "\n";
    }
    let areSame = password == cpassword;
    // if isAllowed is false give an error message (delete once done)

    console.log("email=" + email + "\ndomain=" + domain + "\nisAllowed=" + isAllowed + "\nusername=" + username + "\npassword=" + password + "\nconfirmed=" + areSame);
}