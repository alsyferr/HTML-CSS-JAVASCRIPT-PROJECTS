const loginForm = document.querySelector(".login-form");
const signUpForm = document.querySelector(".signup-form");
const loginBtn = document.querySelector(".login button");
const signupBtn = document.querySelector(".signup button");
const backlayer = document.querySelector(".back-layer");

signupBtn.addEventListener("click", () => {
    loginForm.classList.remove("active");
    signUpForm.classList.add("active");
    backlayer.style.clipPath = "inset(0 0 0 50%)"
})


loginBtn.addEventListener("click", () => {
    signUpForm.classList.remove("active");
    loginForm.classList.add("active");
    backlayer.style.clipPath = "" ;
})