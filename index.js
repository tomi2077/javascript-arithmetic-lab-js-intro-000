function add(a,b){
  return a + b
}

function subtract(a,b){
  return a - b
}

function multiply(a,b){
  return a * b
}

function divide(a,b){
  return a / b
}

function inc(n){
  return n + 1
}

function dec(n){
  return n - 1
}

function makeInt(n){
  return parseInt(n)
}

function roughScale(x, base) {
  var parsed = parseInt(x, base);
  if (isNaN(parsed)) { return 0 }
  return parsed * 100;
}

console.log(roughScale(' 0xF', 16));
// expected output: 1500

console.log(roughScale('321', 2));
// expected output: 0


function makeInt(n){
  return makeInt("n", 10)
}


