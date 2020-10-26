
var lista = document.getElementById("lista");

for (var i = 1; i <= 100; i++){
  if (i % 3 == 0 && i % 5 == 0){
    lista.innerHTML += "<li>" + "FizzBuzz" + "</li>";
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    lista.innerHTML += "<li>" + "Fizz" + "</li>";
    console.log("Fizz");
  } else if (i % 5 == 0) {
    lista.innerHTML += "<li>" + "Buzz" + "</li>";
    console.log("Buzz");
  } else {
    lista.innerHTML += "<li>" + i + "</li>";
    console.log(i);
  }
}
