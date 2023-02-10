var username = localStorage.getItem("name")
console.log(username)
var uEmail = localStorage.getItem("userAccount")
console.log(uEmail)

function display(){
    document.getElementById("loginName").innerHTML = username 
    console.log(document.getElementById("loginName"))

    document.getElementById("acctName").innerHTML = username 
    console.log(document.getElementById("acctName"))

    document.getElementById("emailaddress").innerHTML = uEmail
    console.log(document.getElementById("emailaddress"))
}

window.onload = display()



