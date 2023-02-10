const gameContainer = document.querySelector(".container");
const allMoleItems = document.querySelectorAll(".item");
let startGame,
  startTime,
  countDown = 20,
  score = 0;

const timeCount = document.getElementById("time-count");
const scoreCount = document.getElementById("score-count");

gameContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("mole-clicked")) {
    score++;
    scoreCount.innerHTML = score;

    const bushElem = e.target.parentElement.previousElementSibling;

    let textEl = document.createElement("span");
    textEl.setAttribute("class", "whack-text");
    textEl.innerHTML = "BANG!";
    bushElem.appendChild(textEl);

    setTimeout(() => {
      textEl.remove();
    }, 300);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // total game time is 20 seconds
  startTime = setInterval(() => {
    timeCount.innerHTML = countDown;
    countDown--;
  }, 1000);

  startGame = setInterval(() => {
    showMole();
  }, 600);
});

// shows mole
function showMole() {
  if (countDown <= 0) {
    clearInterval(startGame);
    clearInterval(startTime);
    timeCount.innerHTML = "0";
  }
  let moleToAppear = allMoleItems[getRandomValue()].querySelector(".mole");
  moleToAppear.classList.add("mole-appear");
  hideMole(moleToAppear);
}

function getRandomValue() {
  let rand = Math.random() * allMoleItems.length;
  return Math.floor(rand);
}

// hide Mole
function hideMole(moleItem) {
  setTimeout(() => {
    moleItem.classList.remove("mole-appear");
  }, 1000);
}

function gunMover() {
  const gunImage = document.querySelector(".gun");

  document.addEventListener("mousemove", function (event) {
    gun.style.top = event.clientY + "px";
    gun.style.left = event.clientX + "px";
  });
}

$(document).ready(function () {
  // const APIKEY = "63e217ae3bc6b255ed0c475f"; //(nic)
  // const APIKEY = "63d62e7f3bc6b255ed0c43df"; //(team7asg2)
  const APIKEY = "63e63506478852088da6801f";

  let id = sessionStorage.getItem("id");

  var jsondata = { score: score };
  var settings = {
    async: true,
    crossDomain: true,
    // url: `https://team7assg2-2b5b.restdb.io/rest/login/${id}`,
    url: `https://team7finaltestassg2-46c0.restdb.io/rest/login/${id}`,
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      "x-apikey": APIKEY,
      "cache-control": "no-cache",
    },
    processData: false,
    data: JSON.stringify(jsondata),
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });

  var settings = {
    async: true,
    crossDomain: true,
    // url: "https://team7assg2-2b5b.restdb.io/rest/login?q={}&sort=score&dir=1",
    // url: "https://team7njks-7c44.restdb.io/rest/login?q={}&sort=scire&dir=1",
    url: "https://team7finaltestassg2-46c0.restdb.io/rest/login?q={}&sort=score&dir=1",
    method: "GET",
    headers: {
      "content-type": "application/json",
      "x-apikey": APIKEY,
      "cache-control": "no-cache",
    },
  };

  $.ajax(settings).done(function (response) {
    limit = 5;
    let content = "";
    for (var i = 0; i < response.length && i < limit; i++) {
      content = `${content}<tr id='${response[i]._id}'><td>${i + 1}</td><td>${
        response[i].name
      }</td>
          <td>${response[i].score}</td>`;
    }
    $("#leaderboard-list tbody").html(content);

    // console.log(response);
  });
});
