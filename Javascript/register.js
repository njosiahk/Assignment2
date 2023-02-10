
//[STEP 0]: Make sure our document is A-OK
$(document).ready(function () {
  //what kind of interface we want at the start
  // const APIKEY = "63e217ae3bc6b255ed0c475f";
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
      moves: 0,
      score: 0,
    };

    console.log(jsondata);
    //[STEP 4]: Create our AJAX settings. Take note of API key
    var settings = {
      async: true,
      crossDomain: true,
      //url: "https://team7njks-7c44.restdb.io/rest/login",
      // url: "https://team7assg2-2b5b.restdb.io/rest/login",
      url: "https://team7finaltestassg2-46c0.restdb.io/rest/login?q={}&sort=score&dir=1",
      method: "POST",
      headers: {
        "content-type": "application/json",
        //"x-apikey": "63e217ae3bc6b255ed0c475f", (nic)
        // "x-apikey": "63d62e7f3bc6b255ed0c43df", (jk)
        "x-apikey": "63e63506478852088da6801f",
        "cache-control": "no-cache",
      },
      processData: false,
      data: JSON.stringify(jsondata),
    };

    $.ajax(settings).done(function (response) {
      console.log(response);
      window.location = "login1.html";
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
