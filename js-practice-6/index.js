//Цикли

let num = 0;
while (num < 5) {
  console.log(num);
  num++;
}

let num1 = 5;
while (num1) {
  console.log(num1);
  num1--;
}

//

for (let num2 = 0; num < 5; num2++) {
  console.log(num2); 
}

let num3 = 0;
for ( ; num3 < 5; num3++) {
  console.log(num3);
  if (num3 == 2) break;
}
console.log(`Робота окончена, num = ${num3}`);



//Завдання 

let y = 0;
let numb = 1;
while (numb <= 12) {
  if(numb % 2 === 1){
    console.log("дімасік лошок");
  }
  numb++; 
};



let Z = 0;
let X = 0;
let i = 0;

let evenNum = [];
let oddNum = [];

while(i <= 20) {
  if(i % 2 === 0) {
    Z += i;
    evenNum.push(i);
  }
  else if(i % 2 === 1) {
    X += i;
    oddNum.push(i);
  }
  i++;
}
console.log(evenNum, oddNum); 