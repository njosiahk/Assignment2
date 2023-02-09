//store loginstatus into localstoragw

console.log("Praveen")
let login = localStorage.getItem("loginStatus");
console.log(login);
if (login == "true"){
    // window.location.href = "account.html"
    console.log(document.getElementById("icon"));
    document.getElementById("icon").href = "account.html";
    console.log(document.getElementById("icon"));
}