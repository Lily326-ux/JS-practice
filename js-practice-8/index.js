// //Об'єкти

// let cat = {
//   "legs": 3,
//   "name": "Harmony",
//   "color": "Tortoiseshell"
// };
// console.log(cat);
// console.log(cat["name"]);
// console.log(cat.name);

// //

// let dog = {
//   name: "Pancake",
//   age: "6",
//   color: "white",
//   bark: "Yip yap yip"
// }
// console.log(Object.keys(dog));

// let cat2 = {
//   name: "Harmony",
//   age: "8",
//   color: "tortoiseshell"
// }
// console.log(Object.keys(cat2));

// //Додаємо значення до об'єкта

// let kitty = {};
// kitty["legs"] = 3;
// kitty["name"] = "Harmony";
// kitty["color"] = "Tortoiseshell";

// console.log(kitty);

// let kitty2 = {};
// kitty2.legs = 3;
// kitty2.name = "Harmony";
// kitty2.color = "Tortoiseshell";

// console.log(kitty2);

// //Поєднуємо масиви та об'єкти 

// let dinosaurs = [
//   { name: "Tyrannosaurus Rex", period: "Late Cretaceous" },
//   { name: "Stegosaurus", period: "Late Jurassic" },
//   { name: "Plateosaurus", period: "Triassic" }
// ];

// console.log(dinosaurs[0]);
// console.log(dinosaurs[0]["name"]);
// console.log(dinosaurs[1].period);

// //

// let anna = { name: "Anna", age: 11, luckyNumbers: [2, 4, 8, 16] };
// let dave = { name: "Dave", age: 5, luckyNumbers: [3, 9, 40] };
// let kate = { name: "Kate", age: 9, luckyNumbers: [1, 2, 3] };

// console.log(anna,dave,kate);

// let friends = [anna, dave, kate];

// console.log(friends[1]);
// console.log(friends[2].age);
// console.log(friends[0].luckyNumbers[3]);

// //

// console.log(friends[1]);

// //

// let owedMoney = {};
// owedMoney["Jimmy"] = 5;
// owedMoney["Anna"] = 7;
// console.log(owedMoney["Jimmy"]);
// console.log(owedMoney["Jinen"]);

// owedMoney["Jimmy"] += 3;
// console.log(owedMoney["Jimmy"]);

// console.log(owedMoney);

// //

// let test = ["cat", "dog", "bird", "mouse", "ant", "monkey"];


// for (i = 0; i < test.length; i++) { 
//   if(test[i] === "mouse"){
//     console.log("Hello world");
//   }
//   console.log(test[i]);
// } 

let animals = [
  {
    breed: "cat",
    canFly: false 
  },
  {
    breed: "dog",
    canFly: false 
  },
  {
    breed: "mouse",
    canFly: false 
  },
  {
    breed: "bird",
    canFly: true 
  },
  {
    breed: "bird2",
    canFly: true 
  },
  {
    breed: "bird3",
    canFly: true 
  }
];

let canFly = [];

let canNotFly = [];

for (i = 0; i < animals.length; i++) {
  // console.log(animals[i].breed);
  if(animals[i].canFly === false) {
    canNotFly.push(animals[i].breed);
  }
  else {
    canFly.push(animals[i].breed);
  }
}


console.log(canFly, canNotFly);

//

let tests = ["test1", "test2", "test3"]; 

let ampty = [];

for (i = 0; i < tests.length; i++) {
  // ampty.push(tests[i]);  
  if (tests[i] != "test1") {
    ampty.push(tests[i]);
  } 
}

console.log(ampty);