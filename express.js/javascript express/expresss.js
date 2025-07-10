const express = require('express')
const blog=require("./routes/blog")
const app = express()
const port = 3000
app.use(express.static("public"))
app.use("/blog",blog)

app.get('/', (req, res) => {
  res.send('Hello world! spider')
  console.log("geting")
})
app.post('/', (req, res) => {
  res.send('Hello world! post')
  console.log("postingg")
})
app.put('/', (req, res) => {
  res.send('Hello world! put request')
  console.log("its a put request")
})
app.delete('/', (req, res) => {
  res.send('Hello world! delete request')
  console.log("its a delte request")
})
app.get("/index",(req, res) => {
  
  console.log("its a put request")
  res.sendFile("templates/index.html",{root:__dirname})
})
app.get("/api",(req, res) => {
  
  console.log("its a put request")
  res.json({a:3,b:5,selo:["spider","mon"]})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
