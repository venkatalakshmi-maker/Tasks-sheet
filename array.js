let array = [10,20,30,40,50];
console.log("array elements");

for(let i = 0; i<array.length; i++){
    console.log(array[i]);
}

let userindex = Number(prompt("Enter index number(0 to 4)"));
console.log("User Selected Number:",array[userindex]);