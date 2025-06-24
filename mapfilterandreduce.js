// map create new array and for each is a loop that does not create a new array
let num = [1, 23,33,45, 3, 4, 5];
let num2=[6, 7, 8, 9, 10];
num.map((i,index,array)=>{
    console.log(i,index,array)
})
let a2=num2.filter((i)=>{
    return i<33;})
    console.log(a2);

    // reduce array is used to reduce array using logics imeans we can add mutiply devide into a single one
    let a3=num.reduce((h1,h2)=>{
        return h1+h2;})
        console.log(a3);