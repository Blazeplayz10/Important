function newFunction(){
    document.getElementById('new_function').innerHTML = "I an A member of Your mom"
    document.getElementById('new_function').style.backgroundColor = 'green';
}


function bodyChanger(){
    document.getElementById('body').style.backgroundColor= 'yellow';
}


var a = 6
var b = 7 

var c = 6 + 7
console.log(c)
if (c = b){
    console.log("Code is Perfect");
}else{
    console.log("Check code again")
}

var password = '123456789';
var checkPassword = '12345678';

if (password != checkPassword){
    console.log('Password Mismatch')
}else{
    console.log('User Registeres')
    console.log(password)
}