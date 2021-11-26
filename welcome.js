var userName = localStorage.getItem("userName");
console.log("userName is " + userName);

document.getElementById("userName").innerHTML = userName;


function start() {

    document.getElementById("quiz").style.display = "inline-block";

    n1 = Math.floor((Math.random() * 20) + 1);
    n2 = Math.floor((Math.random() * 20) + 1);

    console.log("n1 = " + n1);
    console.log("n2 = " + n2);

    que = "What is :" + n1 + "+" + n2;
    document.getElementById("que").innerHTML = que;

    correctAns = n1 + n2;

    
    document.getElementById("ans").value = "";
    document.getElementById("message").innerHTML = "";

}


function check() {
    ans = document.getElementById("ans").value;
    console.log("ans = " + ans);

    if (ans == correctAns) {
        document.getElementById("message").innerHTML = "Correct Answer";
    }
    else{
        document.getElementById("message").innerHTML = "Incorrect Answer";
    }
}

function logout(){
    localStorage.removeItem("username");
    window.location = "index.html";
}