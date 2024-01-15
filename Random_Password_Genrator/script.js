let passwordBox  = document.getElementById("pass-box");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWZ"
const lowerCase  = "abcdefghijklmnopqrstuvwz";
const number =  "123456789"
const symbols = "!@#$%^&*(){}[]?"

const allChar = upperCase + lowerCase + number + symbols ;

function createPassword(){
 let password = "";
 password += upperCase[Math.floor(Math.random() * upperCase.length)];
 password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
 password += number[Math.floor(Math.random() * number.length)];
 password += symbols[Math.floor(Math.random() * symbols.length)];

 while( length > password.length){
    password +=  allChar[Math.floor(Math.random() * allChar.length)];
 }
 passwordBox.value  = password;

}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy")
    alert("Password copy on your clipboard")
}
