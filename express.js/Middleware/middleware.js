const express = require('express')
const app = express()
const port = 3000
const fs=require("fs")
// app.use(express.static("public"))
app.get('/', (req, res) => {
  res.send('Hello Wor!')
})
app.use((req,res,next) => {
  res.send('!')
  fs.writeFileSync("hello.txt",`${Date.now()} is a ${req.method}`)
  console.log(`nemo date ${Date.now()}`)
  next()
})
app.use((req,res,next) => {
  console.log('m2')
  next()
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
