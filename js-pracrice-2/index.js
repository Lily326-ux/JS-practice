//Calc
 
var num = Number(prompt("enter first number"));
var num2 = Number(prompt("enter second number"));

if (isNaN(num) && isNaN(num2)) {
  console.log("incorrect first value or second value"); 
}
else if(num === 0 || num2 === 0) {
  console.log("incorrect operation");
}
else {
  var sum = num / num2;
  console.log(sum);
}

var string = "hello";
var num = "2";
 console.log(isNaN((Number(num))));

 var num1 = 4;
 var num2 = "4";
 console.log(num1 == num2);

var age = Number(prompt("enter your age", 18));
var height = Number(prompt("enter your height", 190));
var gender = prompt("enter your gender", "man / woman");

if(gender === "man") {
  console.log((height - 100) * 1.15);
}
else if(gender === "woman") {
  console.log((height - 110) * 1.15);
}
else {
  console.log("i don't know" + " " + gender);
}

//

var myTopThreeMeals = ["Meat", "Chocolate", "Coffee"];
console.log(myTopThreeMeals.length);
console.log(myTopThreeMeals);

console.log(myTopThreeMeals[0]);

console.log(myTopThreeMeals[2]);

myTopThreeMeals[0] = "Fish";
console.log(myTopThreeMeals);

myTopThreeMeals[15] = "Milk";
console.log(myTopThreeMeals);

var myTopThreeMeals1 = ["Meat",["Milk", "Fish"], "Chocolate", "Coffee"];
console.log(myTopThreeMeals1[1][0]);

console.log(myTopThreeMeals1.length);

var toys = ["ball", "doll", "puzzlecondition"];
console.log(toys[toys.length -1]);

//First

var firstNum = prompt("enter your first number");
var secondNum = prompt("enter your second number");

if(firstNum < secondNum){
  console.log(secondNum);
}

else if(firstNum > secondNum){
  console.log(firstNum);
}

//

var six = prompt("Enter your numbers!");

if(six.length  === 6) {
  var firstPart = Number(six[0]) + Number(six[1]) + Number(six[2]);
  var secondPart = Number(six[3]) + Number(six[4]) + Number(six[5]);

  if(firstPart === secondPart) {
    console.log("It is a HAPPY TICKET!!!")
  }
  else {
    console.log("It is UNHAPPY TICKET :(")
  }
}
else {
  console.log("Incorrect number")
}