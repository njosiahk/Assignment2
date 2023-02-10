//   // INITIALISE CONSTANTS
// const dbURL = "https://team7assg2-2b5b.restdb.io/rest/login";
// const APIKEY = "63d62e7f3bc6b255ed0c43df";

// // MAIN CODE
// $(document).ready(function () {
//     $("#registerSubmit").on("click", function (e) {
//         e.preventDefault();

//         // INITIALISING SELECTORS
//         let uEmail = $("#registerEmail").val();
//         // let uFN = $("#registerFirstName").val();
//         // let uLN = $("#registerLastName").val();
//         let name = $("#registerName").val();
//         let uPwd = $("#registerPassword").val();
//         // let uDOB = $("#registerDOB").val();
//         let errorMsg = $("#errorMessage");
//         let spinner = $("#spinner");
//         createAccount(uEmail,name,uPwd);
//         // console.log(uDOB);
//         // let inputValid = validateInput(uEmail, uPwd, uDOB, errorMsg)
//         let inputValid = validateInput(uEmail, uPwd, errorMsg)
//         if (inputValid) {
//             errorMsg.hide();
//             // spinner.css("display", "block");

//             ajaxFuncGET().done(function (response) {
//                 // spinner.css("display", "none");
//                 let checkAcc = true;

//                 response.map(account => {
//                     // Checks duplicate accounts
//                     if (uEmail === account.email) {
//                         errorMsg.show();
//                         errorMsg.html("Account already exists!");
//                         errorMsg.css("color", "red");
//                         checkAcc = false;
//                     }
//                 });

//                 if (checkAcc) {
//                     // createAccount(uEmail, uFN, uLN, uPwd, uDOB);
//                     console.log(uEmail,name,uPwd);
//                     createAccount(uEmail,name,uPwd);
//                 }
//             });
//         }

//     });
// });

// // INPUT VALIDATION
// function validateInput(email, pwd, dobStr, errorMsg) {
//     let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     let emailValid = emailRegex.test(email);

//     // If all fields are valid
//     if (emailValid && pwd.length >= 8) {
//         return true;
//     }
//     else {
//         // If email is invalid
//         if (!emailValid){
//             errorMsg.show();
//             errorMsg.html("Email is not in the right format!");
//             errorMsg.css("color", "red");
//         }
//         // If password is of correct length
//         else if (!(pwd.length >= 8)) {
//             errorMsg.show();
//             errorMsg.html("Password is too short!");
//             errorMsg.css("color", "red");
//         }
//         // If age is above requirement
//         // else if (!(getAge(dobStr) - 16 >= 0)) {
//         //     errorMsg.show();
//         //     errorMsg.html("You need to be 16 or above!");
//         //     errorMsg.css("color", "red");
//         // }

//     }

//     return false;
// }

// // Get age based on date
// // function getAge(dateString)
// // {
// //     let today = new Date();
// //     let birthDate = new Date(dateString);
// //     let age = today.getFullYear() - birthDate.getFullYear();
// //     let m = today.getMonth() - birthDate.getMonth();
// //     if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate()))
// //     {
// //         age--;
// //     }
// //     return age;
// // }

// // CREATE ACCOUNT
// // function createAccount(email, name, fn, ln, pwd, dob) {
// //     let data = {
// //         "email": email,
// //         // "firstName": fn,
// //         // "lastName": ln,
// //         "name": name,
// //         "password": pwd,
// //         // "dateOfBirth": dob,
// //         "points": 0
// //     };

//     // ajaxFuncPOST(data).done(function () {
//     //     ajaxFuncGET().done(function (response) {
//     //         response.map(account => {
//     //             if (account.email === email) {
//     //                 localStorage.setItem("userAccount", account._id);
//     //                 window.location.assign("login.html");

//     //             }
//     //             else {
//     //                 window.location.assign("index.html");
//     //             }
//     //         })
//     //     });
//     // });

// // AJAX TO ACCESS DATABASE
// function ajaxFuncGET() {
//     return $.ajax({
//         "async": true,
//         "crossDomain": true,
//         "url": "https://team7assg2-2b5b.restdb.io/rest/login",
//         "method": "GET",
//         "headers": {
//             "content-type": "application/json",
//             "x-apikey": "63d62e7f3bc6b255ed0c43df",
//             "cache-control": "no-cache"
//         }
//     });
// }

// // function ajaxFuncPOST(data) {
// //     return $.ajax({
// //         "async": true,
// //         "crossDomain": true,
// //         "url": dbURL,
// //         "method": "POST",
// //         "headers": {
// //             "content-type": "application/json",
// //             "x-apikey": APIKEY,
// //             "cache-control": "no-cache"
// //         },
// //         "processData": false,
// //         "data": JSON.stringify(data)
// //     });
// // }

// function createAccount(Name, Email, Password){
//     var jsondata = {"name": Name, "email": Email ,"password": Password,};
//     console.log(jsondata);
//     var settings = {
//       "async": true,
//       "crossDomain": true,
//       "url": "https://team7assg2-2b5b.restdb.io/rest/login",
//       "method": "POST",
//       "headers": {
//         "content-type": "application/json",
//         "x-apikey": "63d62e7f3bc6b255ed0c43df",
//         "cache-control": "no-cache"
//       },
//       "processData": false,
//       "data": JSON.stringify(jsondata)
//     }

//     $.ajax(settings).done(function (response) {
//       console.log(response);
//       // response.map(account => {
//       //   if (account.email === email) {
//       //       localStorage.setItem("userAccount", account._id);
//       //       window.location.assign("login.html")

//       //   }
//       //   else {
//       //       window.location.assign("index.html");
//       // }
//     });
// // })}
//   }

// function createAccount(Name, Email, Password){
// var jsondata = {"name": Name, "email": Email ,"password": Password,};
// // var jsondata = {"field1": "xyz","field2": "abc"};
// var settings = {
//   "async": true,
//   "crossDomain": true,
//   "url": "https://team7assg2-2b5b.restdb.io/rest/login",
//   "method": "POST",
//   "headers": {
//     "content-type": "application/json",
//     "x-apikey": "63d62e7f3bc6b255ed0c43df",
//     "cache-control": "no-cache"
//   },
//   "processData": false,
//   "data": JSON.stringify(jsondata)
// }

// $.ajax(settings).done(function (response) {
//   console.log(response);
// });
// }

// $(document).ready(function () {
//   $("#register").submit(function (e) {
//     e.preventDefault();
//     let email = $("#registerEmail").val();
//     let password = $("#registerPassword").val();
//     let name = $("#registerName").val();
//     setTimeout(createAccount(name, email, password), 5000);
//   });
//   function createAccount(Name, Email, Password) {
//     var jsondata = { name: Name, email: Email, password: Password };
//     // var jsondata = {"field1": "xyz","field2": "abc"};
//     var settings = {
//       async: true,
//       crossDomain: true,
//       url: "https://team7njks-7c44.restdb.io/rest/login",
//       method: "POST",
//       headers: {
//         "content-type": "application/json",
//         "x-apikey": "63e217ae3bc6b255ed0c475f",
//         "cache-control": "no-cache",
//       },
//       processData: false,
//       data: JSON.stringify(jsondata),
//     };

//     $.ajax(settings).done(function (response) {
//       console.log(response);
//     });
//   }
// });

//[STEP 0]: Make sure our document is A-OK
$(document).ready(function () {
  //what kind of interface we want at the start
  const APIKEY = "63e217ae3bc6b255ed0c475f";
  $(".successfulmsg").hide();
  //[STEP 1]: Create our submit form listener
  $("#register").submit(function (e) {
    //prevent default action of the button
    e.preventDefault();

    //[STEP 2]: let's retrieve form data
    //for now we assume all information is valid
    //you are to do your own data validation
    let name = $("#registerName").val();
    let email = $("#registerEmail").val();
    let password = $("#registerPassword").val();

    //[STEP 3]: get form values when user clicks on send
    //Adapted from restdb api
    let jsondata = {
      name: name,
      email: email,
      password: password,
      moves:0,
      score:0
    };

    console.log(jsondata);
    //[STEP 4]: Create our AJAX settings. Take note of API key
    var settings = {
      async: true,
      crossDomain: true,
      //url: "https://team7njks-7c44.restdb.io/rest/login",
      url: "https://team7assg2-2b5b.restdb.io/rest/login",
      method: "POST",
      headers: {
        "content-type": "application/json",
        //"x-apikey": "63e217ae3bc6b255ed0c475f",
        "x-apikey": "63d62e7f3bc6b255ed0c43df",
        "cache-control": "no-cache",
      },
      processData: false,
      data: JSON.stringify(jsondata),
    };

    $.ajax(settings).done(function (response) {
      console.log(response);
      window.location = "index.html"
    });
    // beforeSend: function () {
    //   // if (username === ""  password1 === ""  password2 == "" || email === "") {
    //   //   $('.errormsg').text("Fields cannot be left blank");
    //   // }
    //   //@TODO use loading bar instead
    //   //disable our button or show loading bar
    //   //clear our form using the form id and triggering it's reset feature
    //   // $("#form").trigger("reset");
    // },
  });
});
