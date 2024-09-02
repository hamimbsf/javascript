// let count =0;
// for (let index = 0; index <= 100; index++) {
//     if (index%2 !== 0) {
//         console.log("num=", index);        
//     }
//     // console.log("num=",index);
    
// }
// for (let index = 0; index <= 10; index++) {
//     if (index%2 == 0) {
//         console.log("num=",index);
//     }
    
// }

// let gameNum = 10;
// let userNum = prompt("Guess the game number: ");
// while (userNum != gameNum) {
//     userNum =prompt("you entered the wrong number. Guess again : ");
// }
// console.log("Congratulate, you entered the correct number");

/* 
let applePrice = 70;
let mangoPrice= parseInt('30');
// let mangoPrice= '30';
let sum = applePrice + mangoPrice;
console.log(typeof sum);
 */


/* let fullName = "Muhammad Hamim Hossain";
// console.log(fullName.length);
console.log(fullName[9]); //index no. 9 of fullName */
/* 
let fullName = "Muhammad \t Hamim \n Hossain";
// let fullName = "Muhammad \t Hamim \n Hossain";

console.log(fullName); */


/* let fullName = "Muhammad Hamim Hossain";
// let newFullName = fullName.toLocaleUpperCase();
// let newFullName = fullName.toLocaleLowerCase();
fullName = fullName.toLocaleUpperCase();
console.log(fullName);

// console.log(newFullName); */

// let num = "hellololololo"

// console.log(num.replace("lo","p"));
// console.log(num.replaceAll("lo","p"));
// console.log(num.charAt(3));
/* let sentence = "I Love JS"
sentence = sentence.replace("I","Hamim");
console.log(sentence);
 */

// practice

/* let fullName = prompt("enter your full name without spaces: ");
let userName = "@"+fullName+fullName.length;
console.log(userName); */


/* 1D array */
/* function highestScore(scores) {
   let max =scores[0];
    for (let i = 1; i < scores.length; i++) {
        if (max<scores[i]) {
            max=scores[i];
        }
    }
    return max;
}

let scores =[12,31,9,88,16];
let maxScore = highestScore(scores);
console.log(maxScore);
 */

let sum=0
for (let i = 0; i < 100; i++) {
    if (i%3==0,i%7==0) {
        sum = sum+i
        console.log("sum",sum);
    }
    
}