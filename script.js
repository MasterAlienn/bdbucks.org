// rework showOps
function showOps(str) {
    if (str == "") {
        document.getElementById("balctrl").innerHTML = "";
        return;
    } else {
        document.getElementById("balctrl").innerHTML = str;
    }
}
function getChange() {
    let op = document.getElementById("ams").value;
    let change = document.getElementById("amt").value;
    let user = document.getElementById("users").value;
    let out;
    if (op == "add") {
        out = String(user + " +" + change);
    } else if (op == "minus") {
        out = String(user + " -" + change);
    } else if (op == "set") {
        out = String(user + " set to " + change);
    }
    console.log(out);
}
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
    console.log("email=" + email + "\ndomain=" + domain + "\nisAllowed=" + isAllowed + "\nusername=" + username + "\npassword=" + password + "\nconfirmed=" + areSame);
}