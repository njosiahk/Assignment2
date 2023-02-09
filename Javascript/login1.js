// INITIALISE CONSTANTS
const dbURL = "https://team7njks-7c44.restdb.io/rest/login";
const APIKEY = "63e217ae3bc6b255ed0c475f";
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
        let uPwd = $("#loginPassword").val();
        
        errorMsg.hide();
        spinner.css('display', 'block');

        ajaxFuncGET().done(function (response) {
            spinner.css('display', 'none');

            let accountExists = false;
            response.map(account => {
                let responseID = account._id;
                let responseEmail = account.email;
                let responsePwd = account.password

                if (uEmail === responseEmail && uPwd === responsePwd) {
                    localStorage.setItem("userAccount", responseID);
                    alert("Login successful!");
                    window.location.assign("blastem.html");
                    accountExists = true;
                    window.location.href = "index.html"
                    if (localStorage.getItem("isLoggedIn") == "true"){
                        $("img").innerText = localStorage.getItem("Name")
                    }
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