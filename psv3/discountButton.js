var discount = 1;
//check for float function
function isFloat(n) {
  return n === +n && n !== (n | 0);
}


function discountClicked() {
  promptMesssage = prompt("Please enter your discount: (eg. 0.75)", discount);

  if (promptMesssage === null) {
    discount = discount;

  } else if (promptMesssage == 1) {
    document.getElementById("discountButton").innerHTML = "List Price";
  } else if (isFloat(Number(promptMesssage))) {
    discount = promptMesssage;
    document.getElementById("discountButton").innerHTML = "Discount: " + discount;
  } else {
    window.alert("Invalid Input");
  }
}
