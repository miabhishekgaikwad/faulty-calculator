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
let userOperator = (prompt("enter Operator (-, +, *, /, **) "));
let secNum = Number(prompt("enter Sec number"));

//faulty calc function

let faultyCalc = () => {
  if (userOperator == "+") {
    console.log(firstNum - secNum); //Miltiply karga
  } else if (userOperator == "*") {
    console.log(firstNum + secNum); //minus karga
  } else if (userOperator == "-") {
    console.log(firstNum / secNum); //divide karga
  } else if (userOperator == "/") {
    console.log(firstNum ** secNum); //kuch to karga
  } else {
    console.log("kuch to gad bad hai");
  }
};

let corectCalc = () => {
    if (userOperator == "*") {
      console.log(firstNum - secNum); //Miltiply karga
    } else if (userOperator == "-") {
      console.log(firstNum + secNum); //minus karga
    } else if (userOperator == "/") {
      console.log(firstNum / secNum); //divide karga
    } else if (userOperator == "**") {
      console.log(firstNum ** secNum); //kuch to karga
    } else {
      console.log("kuch to gad bad hai");
    }
  };


//10% faulty aur 90% sahi calc ke liye logic

let random = Math.floor(Math.random() * 100)

if(11 > random){
    console.log(random, "randome num")
    console.log("10% work kar rha hai")
    faultyCalc()
} else {
    console.log("work kar rha hai")
    console.log(random, "randome num")
    corectCalc()
}