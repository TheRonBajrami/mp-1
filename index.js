// Get references to the input fields and the output area

let one = document.getElementById("one");
let two = document.getElementById("two");
let output = document.getElementById("output");

// Add two numbers

function doAdd() {

  output.innerHTML = String(Number(one.value) + Number(two.value));
  checkNegative(); // adjust color if result < 0
}

// Subtract second number from first

function doSub() {

  output.innerHTML = String(Number(one.value) - Number(two.value));
  checkNegative();
}

// Multiply the two numbers

function doMul() {

  output.innerHTML = String(Number(one.value) * Number(two.value));
  checkNegative();
}

// Divide first number by second

function doDiv() {

  if (Number(two.value) === 0) {

    output.innerHTML = "Error: Divide by 0";
  } else {

    output.innerHTML = String(Number(one.value) / Number(two.value));
  }
  checkNegative();
}

// Raise base(first num) to the power of the exponent (second num)

function doPow() {

  let base = Number(one.value);

  let exp = Number(two.value);

  let result = 1;

  // multiply base by itself exp times

  for (let i = 0; i < exp; i++) {

    result *= base;
  }

  output.innerHTML = String(result);
  checkNegative();
}

// Clear both inputs and the output


function doClear() {
  one.value = "";

  two.value = "";
  output.innerHTML = "";
}

// If result is negative, turn text red; else keep black

function checkNegative() {

  if (Number(output.innerHTML) < 0) {
    
    output.style.color = "red";
  
  } else {
    output.style.color = "black";
  }
}
