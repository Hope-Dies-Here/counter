const bill = document.getElementById("bill");
const counter = document.getElementById("counter");
const payBtn = document.getElementById("pay");
const startBtn = document.getElementById("start");

let number = 0;
let payment = 0;

startBtn.addEventListener("click", function () {
  startBtn.setAttribute("disabled", true);

  const interval = setInterval(function () {
    number++;
    if (number === 6) {
      alert("that will be 10$");
      number = 0;
      payment = payment + 10;
      clearInterval(interval);
      startBtn.removeAttribute("disabled");
    }
    bill.innerText = `your bill is $${payment}`;
    counter.innerText = number;
  }, 1000);
});

payBtn.addEventListener("click", function () {
  if (payment > 0) {
    payment = 0;
    alert("the government paid your bill");
    bill.innerText = `your bill is $${payment}`;
  } else {
    alert("What are u paying ?");
  }
});