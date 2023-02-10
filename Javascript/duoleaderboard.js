
$(document).ready(function () {
  // const APIKEY = "63e217ae3bc6b255ed0c475f"; (Nic)
  // const APIKEY = "63d62e7f3bc6b255ed0c43df"; (jk)
  const APIKEY = "63e63506478852088da6801f";

  var settings = {
    async: true,
    crossDomain: true,
    // url: "https://team7assg2-2b5b.restdb.io/rest/login?q={}&sort=moves&dir=1",
    // url: "https://team7njks-7c44.restdb.io/rest/login?q={}&sort=moves&dir=1",
    url : "https://team7finaltestassg2-46c0.restdb.io/rest/login?q={}&sort=moves&dir=1",
    
    method: "GET",
    headers: {
      "content-type": "application/json",
      "x-apikey": APIKEY,
      "cache-control": "no-cache",
    },
  };

  $.ajax(settings).done(function (response) {
    limit = 10;
    let content = "";
    var r = 1;
    for (var i = 0; i < response.length && i < limit; i++) {
      if (response[i].moves > 0) {
        content = `${content}<tr id='${response[i]._id}'><td>${r++}</td><td>${
          response[i].name
        }</td>
            <td>${response[i].moves}</td>`;
      }
    }

    $("#leaderboard-list tbody").html(content);

    // console.log(response);
  });
});





// $.ajax(settings).done(function (response) {
//     limit = 3;
//     let content = "";
//     for (var i = 0; i < response.length && i < limit; i++) {

//       content = ${content}<tr id='${response[i]._id}'><td>${ i + 1}</td><td>${response[i].username}</td>
//       <td>${response[i].score}</td>;
//     }
//     $("#leaderboard-list tbody").html(content);

//   });

// ?q={}&sort=score&dir=-1

//   ?q={}&sort=(table name i.e moves)&dir=-1

// //   -1 is desc
// //   1 is asc
// let jsondata = {
//   name: localStorage.getItem("name"),
//   email: localStorage.getItem("userAccount"),
//   password: localStorage.getItem("password"),
//   moves: localStorage.getItem("moves"),
//   score: 0,
// };
// const APIKEY1 = "63d62e7f3bc6b255ed0c43df";

// console.log("huuhueqfefneo")
//   var settings1 = {
//     async: true,
//     crossDomain: true,
//     url: "https://team7assg2-2b5b.restdb.io/rest/login",
//     method: "PUT",
//     headers: {
//       "content-type": "application/json",
//       "x-apikey": APIKEY1,
//       "cache-control": "no-cache",
//     },
//   };

//   $.ajax(settings1).done(
//   console.log("eofjwiufuiewfui")

//     // console.log(response);
//   );