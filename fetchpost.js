const type=async(todo)=>{
let options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
};
let p=await  fetch("https://jsonplaceholder.typicode.com/posts", options)
let res=await p.json()
return res; 
}
let main=async()=>{
  let todo={
    title: "foo",
    body: "bar",
    userId: 1100,
  }
  let t= await type(todo)
  console.log(t)
}
main()
