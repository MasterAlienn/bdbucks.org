// use localStorage to store data
// delete setCookie once added to all functions needed
function setCookie(name, value) {
    const date = new Date();
    date.setHours(date.getHours() + 1);
    const expiry = new Date(date);
    document.cookie = name + "=" + value + "; expires=" + expiry.toGMTString() + "; path=/";
}
// rework showOps
function showOps() {
    if (getUsername() == "") {
        document.getElementById("balctrl").innerHTML = "Welcome to the Bulldog Bucks Manager, Log in or Sign up to continue";
        return;
    }
}
function getChange() {
    let users;
    const op = document.getElementById("ams").value;
    const change = document.getElementById("amt").value;
    const user = document.getElementById("users").value;
    const date = new Date();
    let out;
    fetch("tusers.json").then(response => {
        if (!response.ok) {
            throw new Error("Can't get file");
        }
        return response.json();
    }).then(data => {
        users = data;
    }).catch(error => {
        console.error("There was something wrong with the fetch operation:", error);
    });
    if (op == "add") {
        out = String(date + user + " +" + change);
    } else if (op == "minus") {
        out = String(date + user + " -" + change);
    } else if (op == "set") {
        out = String(date + user + " set to " + change);
    }
    console.log(out);
}
function logIn() {
    let acc;
    let id;
    let i;
    let found;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    let pac = {
        operation: "login",
        data: {
            username: username,
            password: password
        }
    };
}
function signUp() {
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const cpassword = document.getElementById("confirm").value;
    const domain = email.split("@")[1];
    const areSame = password == cpassword;
    let pac = {
        operation: "mkacc",
        data: {
            email: email,
            username: username,
            password: password
        }
    };
}
function getUsername() {
    return document.cookie.replace("username=", "");
}
// fix logOut
function logOut() {
    document.cookie = "username=; expires=" + Date.UTC() + "; path=/";
}