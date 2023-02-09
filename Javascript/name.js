var username = sessionStorage.getItem("name")
function display(){
    document.getElementById("loginName").innerHTML = username 
}

window.onload = display()



