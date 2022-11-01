const diceBtn = document.getElementById("dice-button");
const advicePar = document.getElementById("advice-paragraph");
const adviceNumber = document.getElementById("advice-number");
diceBtn.addEventListener("click", getAdvice );

const dividerImg = document.getElementById("divider-img");
window.onload = function () {
  getAdvice()

  if (screen.width < 374) {
    dividerImg.src = "pattern-divider-mobile.svg"
  }else{
    dividerImg.src = "pattern-divider-desktop.svg"
 }
}

function getAdvice() {
  advicePar.textContent = "waitttt..."
  fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      return response.json();
    })
    .then((adv) => {
      advicePar.textContent = `"${adv.slip.advice}"`;
      adviceNumber.textContent = `advice #${adv.slip.id}`;
    });
}
