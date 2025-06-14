//for loop
let text1="";

for(let i = 0; i<10; i++){
    text1 += "The number is: " + i + "<br>";
}

document.getElementById("demo1").innerHTML = text1;

//for loop 2

const cars = ["Toyota", "Honda", "Ford", "BMW", "Audi"];

let text = "";

for(let i=0; i<cars.length; i++){
    text += cars[i] + "<br>";
}
document.getElementById("demo").innerHTML = text;

//For/in

const person = {name:"Bleard", lastname:"Avdullahu", age:10};

let txt = "";

for(let x in person){
    txt += person[x] + "";
    }

    document.getElementById("demo3").innerHTML = txt;

    const ds = ["html", "css", "javascript",];
let text2 ="";
for (let x of ds){
    text2 += x + "<br>"
}
document.getElementById("demo4").innerHTML = text2;
//for/of 2

let language = "Javascript";

let text5 = "";

for (let x of language){
    text5 += x + "<br>";
    }

    document.getElementById("demo5").innerHTML = text5;


//while loop

let text4="";
let i = 0;

while(i<10){
    text4 += "The number is: " + i + "<br>";
    i++
}
document.getElementById("demo4").innerHTML = text4;

//do while loop

let text6 = "";
let j = 0;

do{
    text6 += "The number is: " + j;
    j++;
}while(j<10);

document.getElementById("demo6").innerHTML = text2;

//

var students = ["John", "Mary", "David", "Emma"];

for(let i=0; i<students.length; i++){
    document.write('<br>'+students[i]);
}
