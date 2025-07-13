const express = require('express')
const app = express()
const port = 3000
app.set("view engine","ejs");
app.get('/', (req, res) => {
  let sitename="addidas"
  let searchtext="search now"
  let arr=[2,3,4,5,6,7,78]
  res.render("index",{sitename:sitename,searchtext:searchtext,arr})
})

app.listen(port, () => {
  let blog="adidas why when"
  let blogtitle="its a very goodbrand"
  console.log(`Example app listening on port ${port}`)
})
