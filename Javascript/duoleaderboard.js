// INITIALISE CONSTANTS
// const userAccount = localStorage.getItem("userAccount"); // TO TRACK OWN REWARDS
// const dbURL = "https://team7njks-7c44.restdb.io/rest/login";
// const APIKEY = "63e217ae3bc6b255ed0c475f";

// $(document).ready(function () {
//     ajaxFuncGET().done(function (response) {
//         // Pull user data from RestDB
//         let content = "";

//         let leaderboardArray = [];
//         for (let i = 0; i < response.length; i++) {
//             let fullName = response[i].firstName + ' ' + response[i].lastName;

//             leaderboardArray[i] = {
//                 id: response[i]._id,
//                 name: fullName,
//                 points: response[i].points
//             }
//         }

//         leaderboardArray.sort(function (a, b) {return b.points - a.points})

//         // Prints each row in leaderboard
//         for (let i = 0; i < leaderboardArray.length && i < 10; i++) {
//             let id = leaderboardArray[i].id;
//             let rankIcon = "";
//             let name = leaderboardArray[i].name;
//             let points = leaderboardArray[i].points;

//             if (i == 0) {
//                 // rankIcon = "<img src=\"assets/img/rewards/leaderboard-first.png\"/>"
//                 rankIcon = <img src="../Leaderboard_Images/—Pngtree—medal for first place icon_5152053.png"></img>
//             }
//             else if (i == 1) {
//                 rankIcon = "<img src=\"assets/img/rewards/leaderboard-second.png\"/>"
//             }
//             else if (i == 2) {
//                 rankIcon = "<img src=\"assets/img/rewards/leaderboard-third.png\"/>"
//             }
//             else {
//                 rankIcon = i+1;
//             }

//             content = `${content}
//                             <tr id='${id}'>
//                                 <td class="text-center align-middle" style="width: 50px;">${rankIcon}</td>
//                                 <td class="align-middle">${name}</td>
//                                 <td>${points} <img src="assets/img/rewards/ang-bao.png" width="35px" height="35px"></td>
//                             </tr>`
//         }

//         $("#leaderboard tbody").html(content);
//         $("#spinner").hide();
//         $("#leaderboard").show();
//     });
// });

// // AJAX TO ACCESS DATABASE
// function ajaxFuncGET() {
//     return $.ajax({
//         "async": true,
//         "crossDomain": true,
//         "url": dbURL,
//         "method": "GET",
//         "headers": {
//             "content-type": "application/json",
//             "x-apikey": APIKEY,
//             "cache-control": "no-cache"
//         }
//     });
// }

$(document).ready(function () {
  // const APIKEY = "63e217ae3bc6b255ed0c475f"; (Nic)
  const APIKEY= "63d62e7f3bc6b255ed0c43df"; 

  var settings = {
    async: true,
    crossDomain: true,
    "url": "https://team7assg2-2b5b.restdb.io/rest/login",
    // url: "https://team7njks-7c44.restdb.io/rest/login?q={}&sort=moves&dir=1",
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