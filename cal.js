
let buttons = document.getElementsByClassName("btn");
let display = document.getElementById("input");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", clicked);
}


function isNumber(val) {
  if (
    val == "1" ||
    val == "2" ||
    val == "3" ||
    val == "4" ||
    val == "5" ||
    val == "6" ||
    val == "7" ||
    val == "8" ||
    val == "9" ||
    val == "0"
  ) {
    return true;
  }
}

function isoperator(val) {
  if (
    val == "+" ||
    val == "-" ||
    val == "*" ||
    val == "." ||
    val == "/" ||
    val == "%"
  ) {
    return true;
  }
}

let sum = 0;
let cal = "";
function clicked(e) {
  let clickedbtn = e.target.innerHTML;

  try {
    if (isoperator(clickedbtn)) {
      cal += clickedbtn;
    }

    if (isNumber(clickedbtn)) {
      cal += clickedbtn;
    }

    if (clickedbtn == "=") {
      sum = eval(cal);
      cal = String(sum);
    }
    if (clickedbtn == "←") {
      cal = cal.slice(0, cal.length - 1)
    }

    if (clickedbtn == "AC") {
      cal = "";
    }




  } catch (error) {
    alert("invlid expression")
    cal = ""


  }
  display.innerHTML = cal;

  // display.style.backgroundColor="white"

}