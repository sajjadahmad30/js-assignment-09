// 1. TABLE PRINT KARE

/*
let table= +prompt("Enter a number for table");
for(let i = 1; i<=10; i++){
    console.log(`${i} * ${table} = ${i*table} `)
}

*/



// 2. ARRAY ELEMENTS KA SUM PRINT KARE

// let number=[];
// let sum=0;
// for(let i = 0; i <5; i++){

//    let input =+prompt ("enter number");
//    number.push(input);
//    sum=sum+input;
  
// }
// console.log(`The sum of Array is =`,sum);


// 3. ARRAY KA SUB SE BARA NUMBER PRINT KARE
// let largestNo=[];
// for(let i = 0; i <5; i++){
//    let input =+prompt ("enter number");
//    largestNo.push(input);
// }
// let max = 0;
// for(let j = 0; j <5; j++){
//     if(largestNo[j] >= max){
//         max = largestNo[j];
//     }
   
// }
// console.log(`The largest number is = `, largestNo[j]);


// 4. USER SE STRING LE AND USKO ULTA PRINT KARE

// let string = prompt("Please enter any string");
// let reverseString="";
// for(let i = string.length-1; i >=0; i--){
//     reverseString += string[i];
// }
// console.log(`Reverse of the String is `+reverseString)

//Factorial
let number = +prompt("Please enter a number to find the factorial");
let result =1;
for (let i=number; i>1; i--){
    result *=i;
}
console.log(`The factorial of ${number} :`+ result);


