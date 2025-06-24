let a=prompt("wht is ur age")
if(a>10 && a<20){
    console.log("ur age  is between 10 and 20")
}else(
    console.log("u are not between 10 and 20")
)
// question 2 switch
let age=("what is ur age   ")
age=Number.parseInt(age);
switch(age){
    case "10":
        console.log("ur age is 10")
        break;
    case "11":
        console.log("ur age is 11")
        break;
    case "12":
        console.log("ur age is 12")
        break;
    case 13:
        console.log("ur age is 13")
        break;
    case 14:
        console.log("ur age is 14")
        break;
    default:
        console.log("ur age is not specific for this task")
        break;
}
// question 3
let num=prompt("enter a number")
num=Number.parseInt(num);
if(num%2==0){
    console.log("ur number is even")
    
}else{
    console.log("ur number is odd")
    }
// question 4
let age=prompt("what is ur age")
age=Number.parseInt(age);
if(age>18){
    console.log("u can drive")
    
}else{
    console.log("ur u cannot drive")
    }