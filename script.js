// let dis = document.getElementById("display");

// function appendToDisplay(value) {
//   dis.value += value;
// }

// function ClearDisplay() {
//   dis.value = "";
// }

// function calculateResult()(value) {
//     try
//     {
//         dis.value = eval(dis = value)
//     }
//     catch {
//         dis.value = "*WRONG*";
//     }
// }
let display = document.getElementById("display");

function appendToDisplay(value) {
  display.value += value;
  if (display.value === "خطأ!") {
    display.value = "";
    display.classList.remove("error");
  }
}

function ClearDisplay() {
  display.value = "";
}

function calculateResult() {
  try {
    let result = eval(display.value);
    if (isNaN(result) || !isFinite(result)) {
      display.value = "خطأ!";
    } else {
      display.value = result;
    }
  } catch (error) {
    display.value = "خطأ!";
  }
}
