const a = async (text) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(text); // Optional: to show something
      resolve(text);
    }, 2000);
  });
};

(async () => {
  await a("hello"); 
  await a("world"); 
})();
//probelm 2
function sum(a,b,c){
  return a+b+c
}
let x=[1,2,3]
console.log(sum(...x))
//problem 3
const b = async (text,n) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(text);
      resolve(text);
    }, 2000*n);
  });
};

(async () => {
  await b("hello",3); 
  await b("world",3); 
})();











