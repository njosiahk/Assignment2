var username = sessionStorage.getItem("name")
console.log(username)

function display(){
    document.getElementById("loginName").innerHTML = username 
    console.log(document.getElementById("loginName"))
}

window.onload = display()



