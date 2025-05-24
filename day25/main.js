var programmingLanguages = ['javascript','php','java'];



programmingLanguages.push('python');
programmingLanguages.pop()
programmingLanguages.unshift('c#');
programmingLanguages.shift();

console.log(programmingLanguages);
var programmingLanguage = ['javascript', 'php', 'java', 'python', 'delete'];
programmingLanguage.splice(3,2,'Ruby');
console.log(programmingLanguage);

console.log(Math.floor(Math.random()*10));

var students = ['sttudent 1', 'student 2'];

var[s1, s3] = students;

console.log(s1)
console.log(s3)

var citys= ['Prishtina 1', 'Prizren 2','Podujeva 3']

var[city1,, city3] = citys;

console.log(city1);
console.log(city3);

var numbers = [1,2,3,4,5,6,7,8,9,10];

var[first, second, ...otherNumbers]=numbers;

console.log(first);
console.log(secomd);
console.log(otherNumbers.toString());