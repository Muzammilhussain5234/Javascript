let n=prompt("enteer the num")
for(let i=0;i<=n;i++){
    console.log(i)}
//for in loop .I can use it for objects or getting the index of an array
let obj={
    name:"Hero hammada",
    age:66,
    favourite:"spidey"
}
for(let i in obj){
    console.log(i+" "+obj[i])
}
// for of loop .I can use it for arrays or strings

//for of loop
for(let i of "spidey"){
    console.log(i)
}