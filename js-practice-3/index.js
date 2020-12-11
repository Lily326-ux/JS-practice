var button = document.querySelector(".button");

button.addEventListener("click", function(){
  var input = document.querySelector(".input");
  var six = input.value;
  var p = document.querySelector(".text");
  if(six.length  === 6) {
  var firstPart = Number(six[0]) + Number(six[1]) + Number(six[2]);
  var secondPart = Number(six[3]) + Number(six[4]) + Number(six[5]);

  if(firstPart === secondPart) {
    console.log("It is a HAPPY TICKET!!!")
    p.style.color = 'green';
    p.innerHTML = "It is a HAPPY TICKET!!!"
  }
  else {
    console.log("It is UNHAPPY TICKET :(")
    p.style.color = 'red';
    p.innerHTML = "It is UNHAPPY TICKET :("
  }
}
else {
  console.log("Incorrect number")
  p.style.color = 'red';
  p.innerHTML = "Incorrect number"
}
})