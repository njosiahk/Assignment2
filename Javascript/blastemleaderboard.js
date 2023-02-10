$(document).ready(function () {
  const APIKEY = "63d62e7f3bc6b255ed0c43df"; //(jing kai)
  // const APIKEY = "63e217ae3bc6b255ed0c475f"; //(nic)

  var settings = {
    async: true,
    crossDomain: true,
    url: "https://team7assg2-2b5b.restdb.io/rest/login?q={}&sort=score&dir=-1",
    // url: "https://team7njks-7c44.restdb.io/rest/login?q={}&sort=score&dir=-1",
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
      if (response[i].score > 0) {
        content = `${content}<tr id='${response[i]._id}'><td>${r++}</td><td>${
          response[i].name
        }</td>
              <td>${response[i].score}</td>`;
      }
    }

    $("#leaderboard-list tbody").html(content);

    // console.log(response);
  });
});
