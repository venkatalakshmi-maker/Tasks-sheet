// function square(num){
//     return num * num;
// }

// console.log("Square:",square(5));

// function declaration
// funtion square1(num){
//     return num * num;
// }

// // function expression
// const square2 = function(num){
//     return num * num;
// };

// // Arrow function
// const square3 = (num) => num * num;
// console.log(square1(4));
// console.log(square2(4));
// console.log(square3(4));

// // cube functions with function declaration
// function cube1(num){
//     return num * num * num;
// }


// // function expression
// const cube2 = function(num){
//     return num * num * num;
// };
// // arrow functions
// const cube3 = (num) => num * num * num;

// console.log(cube1(2));
// console.log(cube2(2));
// console.log(cube3(2));



// array names
// let names = ["anil","Lakshmi","kumar"];
// function greet(name){
//     console.log("hello" + name);
// }
// for (let i = 0; i<names.length; i++){
//     greet(names[i]);
// }



//switch case with function

function calculator(a,b,operator) {
    switch(operator) {
        case "+":
            return a+b;

        case "-":
            return a-b;
        default:
            return "Invalid Operator";

    }
}
console.log(calculator(10,5,"+"));
console.log(calculator(10,5,"-"));