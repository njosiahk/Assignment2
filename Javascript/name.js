var username = sessionStorage.getItem("name")
function display(){
    document.getElementById("loginName").innerHTML = username 
}

window.onload = display()



// $.ajax(settings).done(function (response) {
//     limit = 3;
//     let content = "";
//     for (var i = 0; i < response.length && i < limit; i++) {

//       content = ${content}<tr id='${response[i]._id}'><td>${ i + 1}</td><td>${response[i].username}</td>
//       <td>${response[i].score}</td>;
//     }
//     $("#leaderboard-list tbody").html(content);

//   });

//   ?q={}&sort=score&dir=-1

//   ?q={}&sort=(table name i.e moves)&dir=-1

// //   -1 is desc
// //   1 is asc