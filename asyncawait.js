async function weather() {
  let delhiWeather = new Promise((resolve, reject) => {
          setTimeout(() => {
                  resolve("27 Deg")
          }, 2000)
  })

  let bangaloreWeather = new Promise((resolve, reject) => {
          setTimeout(() => {
                  resolve("21 Deg")
          }, 5000)
  })

  // delhiWeather.then(alert)
  // bangaloreWeather.then(alert)
console.log("Fetching Delhi Weather Please wait ...")        
let del=await delhiWeather
console.log("Fetched Delhi Weather: "+del)        
console.log("Fetching banglore Weather Please wait ...") 
let ban=await bangaloreWeather
console.log("Fetched banglore Weather: "+ban)        
return[del,ban]        
}


let cherry=async()=>{
  console.log("Hey I am cherry and I am waiting")
  
}
let main=async()=>{
  console.log("Welcome to weather control room")
  let a=await weather()
  let b=await cherry()
}
main()