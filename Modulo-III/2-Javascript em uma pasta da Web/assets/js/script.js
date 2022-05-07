var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function increment() {
  currentNumber += 1;
  currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
  currentNumber -= 1;
  currentNumberWrapper.innerHTML = currentNumber;
}
