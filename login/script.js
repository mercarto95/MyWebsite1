
console.log("Into JS file");


/* Data base connections  */
/*
var request = new XMLHttpRequest();
/* Open('Get' + path)  or send('POST')  
request.open('GET', '../db/accounts.json');

request.onload = function(){
    //var myAccounts = request.responseText;
    /*document.write(myAccounts )
    o sen utanför den : request.send() to send them to the browser 
    var myAccounts = JSON.parse(request.responseText);
}
*/
function checkUser(myUsername, myPassword){
    var request = new XMLHttpRequest();

    request.open('GET', '../db/accounts.json');
    request.onload = function(){
        var myAccounts = JSON.parse(request.responseText);
        myAccounts.push({'Ahm':'kalle'});
        if(check(myAccounts, myUsername, myPassword) == true){
            return true;
        }
        else{
            return false;
        }
    };
    request.send();
}
function check(myAccounts, myUsername, myPassword){
    for(i = 0; i<myAccounts.length; i++){
        if( (myAccounts[i].username == myUsername) && (myAccounts[i].password == myPassword)){
            alert("USer is found");
            var obj = {
                "username":"aa",
                "email": "rodri@rodri.com",
                "password":"rodri123"
            };
            myAccounts.push(obj);
            window.location.href="../main/index.html";
            return true;
        } 
        console.log("i =  " + i);
        
    }
    alert("USer is == NOT == found");
    return false;
}


// open the database


/* ===================== End of database ========= */

const signupBtn = document.getElementById('signupBtn');
const loginBtn = document.querySelector(".loginBtn");
const body = document.querySelector(".body");
const origiLoginBtn = document.querySelector(".origiLoginBtn");
const input_login_username = document.getElementById("login_username_input");
const input_login_password = document.getElementById("login_password_input");
const loginMessage = document.querySelector(".loginMessage");

const formBx= document.querySelector('.formBx');



signupBtn.onclick=function(){
    formBx.classList.add('active');
    body.classList.add('active');
    
}

loginBtn.onclick = function(){
    formBx.classList.remove('active');
    body.classList.remove('active');
}

origiLoginBtn.onclick = function(){
    
    console.log(input_login_username.value);
    console.log(input_login_password.value);

    if(input_login_username.value == "admin" && input_login_password.value =="admin123"){

        //loginMessage.innerHTML = "Login Success";
        //window.location.href="../main/index.html";
        
    }
    else{
        //loginMessage.innerHTML = "Wrong username or password!!";
    }
    
    checkUser(input_login_username.value, input_login_password.value);

    input_login_username.value = "";
    input_login_password.value = "";
}


/** Connection with database */


/* Fetch weather info */







