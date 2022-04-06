function getPin() {
  const pin = Math.round(Math.random() * 10000);
  const pinString = pin + "";
  if (pinString.length == 4) {
    return pin;
  } else {
    return getPin();
  }
}
function getGeneratePin() {
  document.getElementById("display-pin").value = getPin();
}
//calc
document.getElementById("keypad").addEventListener("click", function (event) {
  const numbers = event.target.innerText;
  const input = document.getElementById("typed-number");
  if (isNaN(numbers)) {
    if (numbers == "C") {
      input.value = "";
    }
  } else {
    const inputNumber = input.value;
    const previousNumber = inputNumber + numbers;
    const newNumber = previousNumber;
    input.value = newNumber;
  }
});
function checkValue() {
  const displayPin = document.getElementById("display-pin").value;
  const typedNumber = document.getElementById("typed-number").value;
  const matchPin = document.getElementById("match");
  const notMatchPin = document.getElementById("not-match");
  if (displayPin == typedNumber) {
    matchPin.style.display = "block";
    notMatchPin.style.display = "none";
  } else {
    notMatchPin.style.display = "none";
    matchPin.style.display = "block";
  }
}
