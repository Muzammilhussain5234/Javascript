let a={
    name:"Raj",
    age:20,
    city:"Delhi",
    salary:20000
}
let b={
  run:()=>{
    alert("Self Run")
}
}

a.__proto__=b
console.log(a.run())