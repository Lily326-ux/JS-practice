//Масиви + елементи

var animals = [];

animals.push("Cat");
animals.push("Pig");
animals.push("Dog");

animals.unshift("Elephant");
animals.unshift("Bear");
animals.unshift("Monkey");

console.log(animals);

//Масиви - елементи

var lastAnimal = animals.pop();
console.log(lastAnimal);
console.log(animals);

animals.pop();
console.log(animals);

animals.unshift(lastAnimal);
console.log(animals);

var firstAnimal = animals.shift();
console.log(firstAnimal);
console.log(animals);

//Об'єднання Масивів

var furryAnimals = ["Alpaca", "Ring-tailed Lemur", "Yetti"];
console.log(furryAnimals);

var scalyAnimals = ["Boa Constrictor", "Godzilla"];

var furryAndScalyAnimals = furryAnimals.concat(scalyAnimals);
console.log(furryAndScalyAnimals);

var featheredAnimals = ["Macaw", "Dodo"];

var allAnimal = furryAnimals.concat(scalyAnimals, featheredAnimals);
console.log(allAnimal);

//Індекс Елемента у Масиві

var colors = ["red", "pink", "black", "gray"];

console.log(colors.indexOf("pink"));
console.log(colors.indexOf("green"));

var colors = ["red", "pink", "black", "gray", "pink"];

console.log(colors.indexOf("pink"));

// Перетворення Масива у Рядок

var myFavoriteFood = ["potato", "chiken", "fish", "chokolate"];
console.log(myFavoriteFood.join());
console.log(myFavoriteFood.join("--"));

//
 console.log(Math.random());
 console.log(Math.random()*25);

 console.log(Math.floor(4.293030495));
 console.log(Math.floor(9.999898889));

 console.log(Math.floor(Math.random()*3));

 //

 let machinery = ["Car", "Bicycle", "Bus"];
let randomIndex = (Math.floor(Math.random()*2));
console.log(machinery[randomIndex]);

//

let phrases = [
  "That sounds good",
  "Yes, you should definitely do that",
  "I'm noy sure that's a great idea",
  "Maybe not today?",
  "Computer says no."
];

console.log(phrases[Math.floor(Math.random()*5)]);

//Масиви. Задачі

let randomBodyParts = ["Eyes", "Nose", "Face"];
let randomAdjectives = ["Smelly", "Boring", "Stupid"];
let randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];

let randomBodyPart = randomBodyParts[Math.floor(Math.random()*3)];
let randomAdjective = randomAdjectives[Math.floor(Math.random()*3)];
let randomWord = randomWords[Math.floor(Math.random()*5)];

let randomInsult = "Your " + randomBodyPart + " is like a " + randomAdjective + " " + randomWord + "!!!";

console.log(randomInsult);

// 

let num1 = ["3", "2", "1"];

let string1 = num1[0] + " is bigger than " +  num1[1] + " is bigger than " + num1[2];
console.log(string1);

//