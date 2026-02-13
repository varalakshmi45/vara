let count = 0;

const countDisplay = document.getElementById("count");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");

increaseBtn.addEventListener("click", function () {
  if (count < 10) {
    count++;
    countDisplay.innerText = count;
  }
});

decreaseBtn.addEventListener("click", function () {
  if (count > 0) {
    count--;
    countDisplay.innerText = count;
  }
});
