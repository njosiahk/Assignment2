// INITIALISE CONSTANTS
// const dbURL = "https://team7njks-7c44.restdb.io/rest/login";
const dbURL = "https://team7assg2-2b5b.restdb.io/rest/login";
// const APIKEY = "63e217ae3bc6b255ed0c475f";
const APIKEY ="63d62e7f3bc6b255ed0c43df"
const image = document.createElement("img").src = "../HomePage/user.png";


// MAIN CODE
$(document).ready(function () {
    let submitButton = $("#loginSubmit");
    let errorMsg = $("#errorMessage");
    let spinner = $("#spinner");

    
    // WHEN USER CLICKS LOG IN BUTTON
    submitButton.on("click", function (e) {
        e.preventDefault();

        let uEmail = $("#loginEmail").val();
        console.log(uEmail);
        let uPwd = $("#loginPassword").val();
        
        errorMsg.hide();
        spinner.css('display', 'block');

        ajaxFuncGET().done(function (response) {
            spinner.css('display', 'none');

            let accountExists = false;
            response.map(account => {
                // let responseID = account._id;
                let responseEmail = account.email;
                console.log(responseEmail);
                let responsePwd = account.password
                
                

                if (uEmail === responseEmail && uPwd === responsePwd) {
                    let username = account.name
                    localStorage.setItem("name", username)
                    localStorage.setItem("userAccount", uEmail);
                    localStorage.setItem("loginStatus", true);
                    alert("Login successful!");
                    // window.location.assign("blastem.html");
                    let name = localStorage.getItem("name");
                    console.log(name);
                    accountExists = true;
                    window.location = "index.html"
                    // console.log(localstorage.getItem("name"));

                    // if (document.title == "VALORANT WIKI: HOME"){
                    //     let user = document.getElementById("paraname");
                    //     console.log(user);
                    //     user.innerHTML += localStorage.getItem("name");
                    // }

                    var loginUsername = username
                    window.loginUsername = username 
                    sessionStorage.setItem("name", loginUsername);
                    console.log(loginUsername);

                    // let user = document.getElementById("paraname");
                    // console.log(user);
                    // user.innerHTML += localStorage.getItem("name");
                    // accountExists = true;
                    // window.location.href = "index.html"

                    
                   
                    // console.log(localStorage.getItem("userAccount"));
                }
            });

            if (!accountExists) {
                errorMsg.show();
                errorMsg.html("Wrong username or password?");
                errorMsg.css("color", "red");
            }
        });
    });
});


// AJAX TO ACCESS DATABASE
function ajaxFuncGET() {
    return $.ajax({
        "async": true,
        "crossDomain": true,
        "url": dbURL,
        "method": "GET",
        "headers": {
            "content-type": "application/json",
            "x-apikey": APIKEY,
            "cache-control": "no-cache"
        }
    });
}

// if (localStorage.getItem("isLoggedIn") == "true"){
//     $("i.fa fa-heart").innerText = localStorage.getItem("Name")
// }