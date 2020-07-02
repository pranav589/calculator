const op = document.getElementById('output-value');

function myclick(val) {
  op.value += val;
}

function output() {
  op.value = eval(op.value)
}

function allClear() {
  op.value = ""
}

function back() {
  let backVal = op.value;
  op.value = backVal.substr(0, backVal.length - 1)
}

function percent() {
  op.value = op.value / 100;
}

function funcSin() {
  op.value = Math.sin(op.value);
}

function funcCos() {
  op.value = Math.cos(op.value);
}

function funcTan() {
  op.value = Math.tan(op.value);
}

function sq() {
  op.value = Math.pow(op.value, 2)
}

function funcCube() {
  op.value = Math.pow(op.value, 3)
}

function funcRoot() {
  op.value = Math.pow(op.value, 1 / 2)
}