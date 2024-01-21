var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");


function validateName(){
    var name = document.getElementById("contact-name").value;
    if (name.length == 0){
        nameError.innerHTML = "Name is required";
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "write full name";
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-check" style="color: #63E6BE;"></i>';
    return true;
}
 
function validatephone(){
    var phone = document.getElementById("contact-phone").value;
    if(phone.length == 1 ){
        phoneError.innerHTML = "Phone is required";
        return false ;
    }
    if(phone.length !== 10){
        phoneError.innerHTML = 'Phone no should be 10 digit';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'Only in digits';
        return false;
    }

    phoneError.innerHTML = '<i class="fa-solid fa-check" style="color: #63E6BE;"></i>';
    return true;

}
function validateEmail(){
    var email = document.getElementById("contact-email").value;

    if(email.length == 0){
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Email Invalid';
        return false;
    }

    emailError.innerHTML = '<i class="fa-solid fa-check" style="color: #63E6BE;"></i>'
    return true;
}

function validateMessage() {
    var message = document.getElementById("contact-message");
    var req = 30;
    var left = req - message.length;

    if(left > 0){
        messageError.innerHTML = left + 'more characters required';
        return false;
    }
    messageError.innerHTML = '<i class="fa-solid fa-check" style="color: #63E6BE;"></i>';
    return true;


}

function validateForm() {
    if(!validateEmail() || !validateMessage() || !validateName() || !validatephone() ){
        submitError.innerHTML = 'Please fix error to submit';
        submitError.style.display = 'block';
        setTimeout(function(){
            submitError.style.display = 'none';
        },3000)
        return false;
    }

}