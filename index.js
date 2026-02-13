let count = 0;

const countDisplay = document.getElementById("count");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const updateBtn = document.getElementById("update");
const container = document.querySelector(".container");

function checkMaxReached() {
  if (count >= 10) {
    container.classList.add("fade-out");
    increaseBtn.disabled = true;
    decreaseBtn.disabled = true;
    updateBtn.style.display = "inline-block";
  } else {
    container.classList.remove("fade-out");
    increaseBtn.disabled = false;
    decreaseBtn.disabled = false;
    updateBtn.style.display = "none";
  }
}

increaseBtn.addEventListener("click", function () {
  if (count < 10) {
    count++;
    countDisplay.innerText = count;
    checkMaxReached();
  }
});

decreaseBtn.addEventListener("click", function () {
  if (count > 0) {
    count--;
    countDisplay.innerText = count;
    checkMaxReached();
  }
});

updateBtn.addEventListener("click", function () {
  count = 0;
  countDisplay.innerText = count;
  checkMaxReached();
});