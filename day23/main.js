// function showMessage(){
// alert("This is a function in Javascript");
// }

// showMessage();

function Sum(x,y){
    document.write(x+y);
}

sum(2,5);
document.write("<br>");
sum(55,44);
document.write("<br>");
sum(120,54);


//arrow function
// var arrowFucton = name => alert(`Hello ${name}`);

// arrowFucton("Bleard");


function testFuncion(){
var localvar = "Bleard";
alert(localVar);
}

testFuncion();

var car ={name: "Mercedes",
  color: "red",
year: 2020,
kilometers:0,
startEngine: function(){
    alert("The car is moving!");
}, 
get getKilometers(){
    return this.kilometers;
},
set setKilometers(km){
    this.kilometers = km;
}
 };

 console.log(car.getKilometers);
  car.setKilometers = 100;
  console.log(car.getKilometers);

  // alert(car.name);

  // alert(car['color']);


  // var car = new Object();

  // car.name = "Mercedes";
  // car.color = "red";
  // car.year = 2020;
  // car.kilometers = 0;

  // car.type = function(){
  //     return this.name + " " + this.color + "" + this.kilometers;
  // }

  // console.log(car.type());