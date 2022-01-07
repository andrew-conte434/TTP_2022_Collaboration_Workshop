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
let inputSub = document.querySelector(".inputSub");
let thanks = document.querySelector(".thanks");

let Thanks = submitBtn.addEventListener("click", function () {
  let thankYou = document.createElement("h2");
  thankYou.innerText = " The world thanks you for your donation!";
  thanks.append(thankYou);
  inputSub.value = "";
  setTimeout(function () {
    thankYou.innerText = " "
  },5000)
})

let thanksTimer = setTimeout(function clear(Thanks) {
  Thanks.clear();
}, 5000);