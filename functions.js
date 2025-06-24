let marks={
    "chahcha": 99,
    "hero": 100,
    "spidey": 98
   

}
for(let i in marks){
    console.log("marks of "+i+"are"+marks[i])
}
// for(let i=0;i<Object.keys(marks).length;i++){ 
//     console.log("marks of"+Object.keys(marks)[i]+" are "+marks[Object.keys(marks)[i]])
// }
//problem 4
let cn=prompt("how which num u want to compare")
let i
while(i!=cn){
  i=prompt("enter the num")
  console.log(i)
}
console.log("u have enter the right num")
//problem 5
let mean = () => {
    let sum = 0;
    for (let i = 0; i < 5; i++) {
        let c = prompt("enter the num");
        c = Number.parseInt(c);
        sum += c;
    }
    console.log("the mean is " + sum / 5);
}
