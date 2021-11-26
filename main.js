

function login() {
    userName = document.getElementById("name").value;
    localStorage.setItem("userName", userName);
    window.location = "welcome.html";
}