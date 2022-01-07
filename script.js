//FUNCTIONALITY FOR FORM ON HOME PAGE

let signUpBtn = document.querySelector(".signup-btn")
let thanksforSigning = document.querySelector(".thanks-form")
let emailName = document.querySelector(".email-name")
let email = document.querySelector(".email")

signUpBtn.addEventListener("click", function submit() {
  let thankYou = document.createElement("h2");
  thankYou.innerText = " Thank you for signing up!";
  thanksforSigning.append(thankYou);
  emailName.value = ""
  email.value = ""
  setTimeout(function () {
    thankYou.innerText = " "
  },5000)
})


//FUNCTIONALITY FOR PAGE 3
let submitBtn = document.querySelector(".subBtn");
let submitBtn2 = document.querySelector(".subBtn2");
let submitBtn3 = document.querySelector(".subBtn3");


let inputSub = document.querySelector(".inputSub");
let inputSub2 = document.querySelector(".inputSub2");
let inputSub3 = document.querySelector(".inputSub3");



let thanks = document.querySelector(".thanks");
let thanks2 = document.querySelector(".thanks2");
let thanks3 = document.querySelector(".thanks3");


submitBtn.addEventListener("click", function () {
  let thankYou = document.createElement("h2");
  thankYou.innerText = " The world thanks you for your donation!";
  thanks.append(thankYou);
  inputSub.value = "";
  setTimeout(function () {
    thankYou.innerText = " "
  },5000)


submitBtn2.addEventListener("click", function () {
  let thankYou = document.createElement("h2");
  thankYou.innerText = " The world thanks you for your donation!";
  thanks2.append(thankYou);
  inputSub.value = "";
  setTimeout(function () {
    thankYou.innerText = " "
  },5000)
});

submitBtn3.addEventListener("click", function () {
  let thankYou = document.createElement("h2");
  thankYou.innerText = " The world thanks you for your donation!";
  thanks3.append(thankYou);
  inputSub.value = "";
  setTimeout(function () {
    thankYou.innerText = " "
  },5000)
});
