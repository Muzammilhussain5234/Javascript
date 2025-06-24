let num = [1, 23,33,45, 3, 4, 5];
let num2=[6, 7, 8, 9, 10];
for(let i =0;i<num.length;i++){
    console.log(num[i]);
}

num.forEach((i)=>{
    console.log(i*i)
})
// array.from() method converts an array-like or iterable object to an array.
// let name="chahcha"
// let a=Array.from(name);
// console.log(a);
// for of loop
for(let i of num){
    console.log(i);
}
// for in loop
for(let i in num){
    console.log(i);
}