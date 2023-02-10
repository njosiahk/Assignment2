//store loginstatus into localstoragw

// console.log("Praveen")
$(document).ready(function(){
    let login = localStorage.getItem("loginStatus");
    console.log(login);
    if (login == "true"){
    // window.location.href = "account.html"
    console.log(document.getElementById("loginStatus"));
    document.getElementById("loginStatus").href = "account.html";
    console.log(document.getElementById("loginStatus").href);

    $(".delete").click(function(){
        localStorage.clear()
        window.location.href = "index.html"
    })
}
})


