let a = Math.floor(Math.random() * 10) + 1;
let b=0;

while (true) {
    let i = parseInt(prompt("Enter a number:"));
    b+=1
    if (i === a) {
        console.log(`Your number is right! The number is ${a}`);
        console.log(`u take ${b} attempts`)
        break;
    } else {
        console.log("Your number does not match. Try again.");
        console.log(` Attempts so far: ${b}`);
        
    }
    
}