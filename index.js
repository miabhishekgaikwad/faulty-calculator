/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times

*/

let firstNum = Number(prompt("enter first number"));
let userOperator = prompt("enter Operator (-, +, *, /, **) ");
let secNum = Number(prompt("enter Sec number"));

//faulty calc function

let faultyCalc = () => {
  if (userOperator === "+") {
    alert(firstNum - secNum);
  } else if (userOperator === "*") {
    alert(firstNum + secNum);
  } else if (userOperator === "-") {
    alert(firstNum / secNum);
  } else if (userOperator === "/") {
    alert(firstNum ** secNum);
  } else if (userOperator === "**") {
    alert(firstNum + secNum);
  } else {
    alert("faultyCalc me kuch to gad bad hai");
  }
};

let correctCalc = () => {
  if (userOperator === "*") {
    alert(firstNum * secNum);
  } else if (userOperator === "+") {
    alert(firstNum + secNum);
  } else if (userOperator === "-") {
    alert(firstNum - secNum);
  } else if (userOperator === "/") {
    alert(firstNum / secNum);
  } else if (userOperator === "**") {
    alert(firstNum ** secNum);
  } else {
    alert("correctCalc me kuch to gad bad hai");
  }
};

//10% faulty aur 90% correct calc ke liye logic

let random = Math.floor(Math.random() * 100);

if (10 >= random) {
  console.log(random, "random num");
  console.log("10% work kar rha hai");
  faultyCalc();
} else {
  console.log("90% work kar rha hai");
  console.log(random, "random num");
  correctCalc();
}
