const display = document.getElementById("display");

function add(s) {
  display.value += s;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
    display.value = eval(display.value);
}