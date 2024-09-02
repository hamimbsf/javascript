// let marks = [88,11,22,44,54,55,66,76]

// let student1 = marks[2];
// console.log(marks);
// console.log(typeof marks);
// console.log(student1);

/* let marks = [88,11,22,44,54,55,66,76]
marks[2] = 27;
console.log(marks);
 */

/* 
let names = [ "hamim","lamim", "tamim", "khamim", "chamim"];
names[3] = "nahid"; // i can change immutable strings in arrays cause array is mutable
// console.log(names);
// for (let index = 0; index < names.length; index++) {
//     // const element = array[index];
//     console.log(names[index]);
        
// }

for (const name of names) {
    console.log(name);
    //js indirectly name defines as element it means a single name of names (here element works as like as index of (for loops))
} */

/* 
let marks = [85, 97, 44, 37, 76, 60];

let sum = 0; */
// for (const mark of marks) {
//     sum += mark;
// }
// let averageMarks = sum/marks.length;
// console.log(averageMarks);

/* for (let sum = 0; sum < marks.length; sum++) {

}
 */

/* normal calculator */

/* 
var num1 = prompt("enter the value of num1: ")
var num2 = prompt("enter the value of num1: ")


num1 =parseInt(num1, 10);
num2 =parseInt(num2, 10);


console.log(num1+num2);
console.log(num1*num2);
console.log(num1-num2);
console.log(num1/num2);
console.log(num1%num2);

 */

/* area calculator */

/* 
let base = prompt("enter the value of base: ")
let height = prompt("enter the value of base: ")


base = parseFloat(base, 10);
height =parseFloat(height,10);

console.log("Value of the area of square: ",base*height);
console.log("Value of the area of rectangle: ",base*height);
console.log("Value of the area of triangle: ",(base*height)/2);
// console.log("Value of trapezium: ",base*height);
 */

/* temperature calculator */

/* 
const fahrenheit = parseFloat(prompt("enter the value of fahrenheit: "));
console.log(("celsius= ",fahrenheit-32)*(5/9));
 */

/* grade system */
/* 
let marks = parseFloat(prompt("enter your marks and check your grades: "));


if (marks >= 80 && marks <= 100) {
    console.log("your grade is A+");
    
} 
else if(marks >= 70 && marks <= 79){
    console.log("your grade is A");
    
}
else if(marks >= 60 && marks <= 69){
    console.log("your grade is A-");
    
}
else if(marks >= 50 && marks <= 59){
    console.log("your grade is B");
    
}
else if(marks >= 40 && marks <= 49){
    console.log("your grade is C");
    
}
else if(marks >= 33 && marks <= 39){
    console.log("your grade is C");
    
}


else {
    console.log("you are fail");
    
}

 */

/* find the biggest number */
/* 
let num1 = parseFloat(prompt("enter the value of num1: "));
let num2 = parseFloat(prompt("enter the value of num2: "));
let num3 = parseFloat(prompt("enter the value of num3: "));
if (num1>num2 && num1>num3) {
    console.log(num1, "num1 is the biggest number");
}
else if(num2>num1 && num2>num3) {
    console.log(num2, "num2 is the biggest number");
}
else(
    console.log(num3, "num3 is the biggest number")
) */

/* switch */
/* digit to spelling */
/* let digit = prompt("put a digit and get spell= ")
    switch (digit) {
        case "0":
            console.log("Zero");
            break;
        case "1":
            console.log("One");
            break;
        case "2":
            console.log("Two");
            break;
        case "3":
            console.log("Three");
            break;
        case "4":
            console.log("Four");
            break;
        case "5":
            console.log("Five");
            break;
        case "6":
            console.log("Six");
            break;
        case "7":
            console.log("Seven");
            break;
        case "8":
            console.log("Eight");
            break;
        case "9":
            console.log("Nine");
            break;
    
        default:
            console.log("not a digit");
            
            break;
    } */

/* check vowel letter */
/* 

let letter = prompt("enter a latter and check vowel: ")

letter =letter.toLocaleLowerCase()

switch (letter) {
    case "a"|| "e"||"i"||"o"||"u":
        console.log(letter, "is vowel");
        
        break;

    default:
        console.log(letter, "isn't vowel");
} */

/* for loop */

/* for(let a=1; a <= 10; a++){
    console.log(a,"putul");
    
}
console.log("end");
 */
/* for(let a=10; a >= 1; a--){
    console.log(a,"");
    
}
console.log("end");
 */
//sum number 1 to 5 =

/* let sum = 0;
for(let x=1; x<=5; x++){
    sum= sum+x;
    // console.log(sum);
    
}
console.log(sum); */

//sum = sum+x ekhane "x" er man update hote thakche ebong sum er moddhe add hoiteche totokhon obdi jotokhon na x=5 hoi
//sum = 0+1
//sum = 1+2
//sum = 3+3
//sum = 6+4
//sum = 10+5
//sum = 15

/* jekono kromik shongkhar jogfol */

/* 
let from = parseInt(prompt("enter the value of from: "));
let to = parseInt(prompt("enter the value of to: "));
let sum =0;
for (let x = from; x <= to; x++){
    sum= sum+x;
    // console.log(sum);
}

console.log("sum= ",sum);
 */

/* while loop */

/* 1 theke 5 er jogfol nirnoy using while loop */
/* let x=1;
let sum= 0;
while (x <= 5) {
    sum = sum+x;
    x++;
    console.log(sum);
    
}
console.log("sum",sum);
 */

/* 2 theke 100 obdi jor shongkhar jogfol */
/* 
let odd = 2;
sum = 0;
while (odd <= 100) {
    sum = sum+odd;
    odd= odd+2;
    console.log(sum);
    
}

console.log("sum",sum);
 */

/* let num = 1;
let sum = 0;
while (num <= 100) {
  if (num % 3 == 0 && num % 5 == 0) {
    sum = sum + num;
  }
  num++;
  console.log(num, sum);
}
console.log("sum", sum); */

/* continue and break */

/* for (let i = 0; i <= 100; i++) {
    if (i%2==0) {
        continue;
    }
    console.log(i);
    
} */
/* for (let i = 0; i < 100; i++) {
   if (i==10) {
    break;
   }

   console.log(i);
   
} */

/* ternary operator */

/* let num = Number(prompt("enter the value and check what type it is; "))

if (num>0) {
    console.log("positive Number");
    
}
else if (num<0) {
    console.log("Negative Number");
    
}

else {
    console.log("Zero");
    
} */
/* code of ternary operator */

/* let num = Number(prompt("enter the value and check type: "));

let result = num > 0 ? "positive": "negative";
console.log(result);
 */

/* let num = Number(prompt("put the number and check it's type: "));

let result = num > 0? "positive" : num < 0 ? "negative" : num == 0? "Zero": "not a number"; 
console.log(result);
 */

/* let a = Number(prompt("Enter the value of a: "));
let b = Number(prompt("Enter the value of b: "));
let c = Number(prompt("Enter the value of c: "));

let result = a>b && a>c?"A is the biggest number":b>a && b>c? "b is the biggest number": c>a && c>b ?"c is the biggest number":"you don't put any number"


console.log(result);
 */
/* how functions actually works */

/*  function addition(num1, num2) {
  let result = num1 + num2;
  return result; // return result dewai eta man bar bar save kore ferot dibe
}
let add=addition(6,89);//ekhane 6 num1 er moddhe bosche ar 89 num2 er moddhe 
console.log("addition: ",add);

 */

/* 
function subtraction(a, b) {
  let result = a - b;
  return result;
}

let subs = subtraction(88, 33);
console.log("subtraction", subs);
 */





/* function expression */

/* let addition = function(num1, num2) {
   
   return num1+num2
}

console.log(addition(11,12));
; */
/* function iife */
/* (function subtraction(num1, num2) {
    return num1 - num2;
})(10, 5); */


/* let num =[12,33,55,66,68,70];
let sum =0;
for (let i = 0; i < num.length; i++) {
    if (num[i]%5==0,num[1]%3==0) {
        sum = sum + num[i];
        console.log(num[i]);
    }
    
}
console.log("Sum",sum);
 */

// immediate invocable function expression

/* (function addition(num1,num2) {
    console.log(num1+num2);
    return num1+num2;
})(9,5); */



/* array declaration  */
/* 
let names = new Array(20);
names[0]= "nasir";
names[1] = "hamim";
names[2]= "tamim";

console.log(names); */

/* one more way to make array */

/* let names = ["hamim","lamim","alif", "ortho","aurtho"];
names.push("coconut");
// names.pop();
names.unshift("arpi ch");
names.splice(2,0,"phulo","bodmash")//adding element with splice can add element on any index num 
//names.splice(2,2);//remove element with splice can remove element on any index num 
// let newName = names.slice(1,2);
// console.log(newName);
// console.log(names);

let sortedNames = names.sort();//it makes the array serial with alphabet 
names.reverse();
console.log(names);

 */

/* array concatenation */
/* 
let countryOne =["bangladesh","pakistan"];
let countryTwo =["china","nepal"];
let country = countryOne.concat(countryTwo); //concat library can added two array into one
console.log(country);

 */
/* let classTen = [1,3,4,6,7,8,9];
let classNine = [11,14,15,17,18];

let classes = classTen.concat(classNine);
console.log(classes);
 */

/* array with while loops and condition */

/* let classTen = [1,3,4,6,7,8,9];
let i=0;

while (i<classTen.length) {
    if (classTen[i]%2==0, classTen[i]%3==0) {
        console.log(classTen[i]);
    }
    i++;
}
 */
/* let numbers = new Array();

for (let i = 0; i < 5; i++) {
    numbers[i]=parseInt(prompt("enter 5 number & get sum of the values: "));
}
let sum =0;
for (let i = 0; i < 5; i++) {
    console.log(numbers[i]);
    sum=sum+numbers[i];
}
console.log("sum: ",sum);
 */

/* 
let numbers = new Array();
let sum = 0;

for (let i = 0; i < 5; i++) {
    numbers[i] = parseInt(prompt("Enter 5 numbers & get sum of the values: "));
    sum = sum + numbers[i];
}

console.log("Sum: ", sum);
 */

/* array library */
/* 
let names = ["hamim","lamim","alif", "ortho","aurtho"];
names.push("coconut");
// names.pop();
names.unshift("arpi ch");
names.splice(2,0,"phulo","bodmash")//adding element with splice can add element on any index num 
//names.splice(2,2);//remove element with splice can remove element on any index num 
// let newName = names.slice(1,2);
// console.log(newName);
// console.log(names);

let sortedNames = names.sort();//it makes the array serial with alphabet 
names.reverse();
console.log(names);

 */


/* number sorting in array */
/* 
let numbers =[1,2,4,6,9,11,5,7];
numbers.sort(function (a,b) {
    return a-b;
});
console.log(numbers);
 */

