const firstnameElem=document.getElementById("firstname");
const lastnameElem=document.getElementById("lastname");
const emailElem=document.getElementById("email");
const passwordElem=document.getElementById("password");
const password2Elem=document.getElementById("password2");
const firstnameErrorElem=document.getElementById("firstname-error");
const lastnameErrorElem=document.getElementById("lastname-error");
const emailErrorElem=document.getElementById("email-error");
const passwordErrorElem=document.getElementById("password-error");
const password2ErrorElem=document.getElementById("password2-error");

const formElem=document.getElementById("form");

// console.log(formElem);

//add event listener to the form element
formElem.addEventListener("submit", (event)=>{

    const emailRegExp =/^([A-Za-z0-9_\-\.])+\@([A-za-z0-9_\-\.])+\.([A-Za-z] {2,4})$/;

    //trim

    const firstnamevalue=firstnameElem.value.trim();
     console.log(firstnamevalue);
    const lastnamevalue=lastnameElem.value.trim();
    const emailvalue=emailElem.value.trim();
    const passwordvalue=passwordElem.value.trim();
    const password2value=password2Elem.value.trim();


    //validating the firstname
    if(firstnamevalue=="" || firstnameValue==null){
        event.preventDefault();
        firstnameErrorElem.innerHTML=
        "please enter your first name required";

    }

    //validtaion for last name
    if(lastnamevalue==="" ||lastnamevalue==null){
        event.preventDefault();
        lastnameErrorElem.innerHTML = "your last name is required";
    }

    if(!emailvalue.match(emailRegExp)){
        event.preventDefault()
        emailErrorElem.innerHTML = "Enter a valid email";
    }

    if(passwordvalue===""){
        event.preventDefault();
        passwordErrorElem.innerHTML = "password cannot be empty";
    }

    if(passwordvalue.length <= 8){
        event.preventDefault();
        passwordErrorElem.innerHTML = "password must be longer than 8 characters";
    }

    if (passwordvalue >= 15){
        event.preventDefault();
        passwordErrorElem.innerHTML = "password must not be longerthan 15 characters";
    }

    if(password2value=== "" || password2value == null){
        event.preventDefault();
        password2ErrorElem.innerHTML = "confirm password cannot be empty"

    }

    if(password2value  !== passwordvalue){
        event.preventDefault();
        password2ErrorElem.innerHTML = "password doesn't match";
    }


})

