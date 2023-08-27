// let email = document.getElementById("email");
// let email1 = document.getElementById("email1");
// let password = document.getElementById("password");
// let password1 = document.getElementById("password1");
// let name = document.getElementById("name");
// let signInBtn = document.getElementById("signInBtn");

// signInBtn.addEventListener("click", LogIn);

// function LogIn(event) {
//     event.preventDefault();
//     let emailValue = email.value;
//     let passwordValue = password.value;

//     let emailRegX = /^([\w]+)@([a-zA-Z]+)\.([a-zA-Z\.]+)$/;
//     let passwordRegX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\W]).{8,15}$/;

//     if (emailValue,passwordValue.match(emailRegX,passwordRegX)) {
//         alert("Logged In");
//     }else{
//         alert("Invalid Account");
//     }
//     console.log();
// }
//#############################################

// let email = document.getElementById("email");
// let password = document.getElementById("password");
// let signIn = document.getElementById("signInBtn");
// 
// signIn.addEventListener("click", logIn);
// 
// function logIn(event) {
    // event.preventDefault();
    // let emailValue = email.value;
    // let passwordValue = password.value;
// 
    // let emailRegX = /^([\w]+)@([a-zA-Z]+)\.([a-zA-Z\.]+)$/;
    // let passwordRegX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\W]).{8,15}$/;
// 
    // if (emailRegX.test(emailValue) && passwordRegX.test(passwordValue)) {
        // alert("Logged In");
    // } else {
        // alert("Invalid Account");
    // }
    // console.log(logIn);
// }

//###################################################

let email = document.getElementById("email");
let password = document.getElementById("password");
let signIn = document.getElementById("signInBtn");

signIn.addEventListener("click", logIn);

function logIn(event) {
    event.preventDefault();
    let emailValue = email.value;
    let passwordValue = password.value;

    let emailRegX = /^[\w]+@[\w]+\.[a-zA-Z]+$/; 
    let passwordRegX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,15}$/; 

    if (emailRegX.test(emailValue) && passwordRegX.test(passwordValue)) {
        alert("Logged In");
    } else {
        alert("Invalid Email");
    }
    // console.log(logIn); 
};

// 
// document.getElementById("signupForm").addEventListener("submit", function(event) {
        // event.preventDefault(); 
        // Get form values
        // let name = document.getElementById("name").value;
        // let email = document.getElementById("email1").value;
        // let password = document.getElementById("password1").value;
// 
        
// 
        
        // let message = document.getElementById("message");
        // message.innerHTML = "Sign-up successful for " + name;
    // },
    // console.log()
// )
//########################################

    // document.getElementById("signupForm").addEventListener("submit", function(event) {
        // event.preventDefault(); 

    // 
        // let name = document.getElementById("name").value;
        // let email = document.getElementById("email2").value;
        // let password = document.getElementById("password2").value;


        // let message = document.getElementById("message");
        // alert = "Sign-up successful for " + name;
    // },
    // console.log()
// );

//##################################################

document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let name = document.getElementById("name").value;
    let email = document.getElementById("email2").value;
    let password = document.getElementById("password2").value;

    let message = document.getElementById("message");
    message.innerHTML = "Sign-up successful for " + name;
    // console.log("Sign-up successful for " + name);
});

