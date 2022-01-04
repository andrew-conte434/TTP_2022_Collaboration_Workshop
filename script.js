let submitBtn = document.querySelector(".subBtn");
let inputSub = document.querySelector(".inputSub");
let thanks = document.querySelector(".thanks");

let Thanks = submitBtn.addEventListener("click", function () {
  let thankYou = document.createElement("h2");
  thankYou.innerText = " The world thanks you for your donation!";
  thanks.append(thankYou);
  inputSub.value = "";
});

let thanksTimer = setTimeout(function clear(Thanks) {
  Thanks.clear();
}, 5000);