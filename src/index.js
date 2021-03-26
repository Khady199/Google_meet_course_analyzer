let dotenv = require('dotenv')
let app = require('express')();
let morgan = require("morgan")

dotenv.config()

const PORT = process.env.PORT || 8081

app.use(morgan("combined"))
app.listen(PORT,()=>{
    console.log(`Server started at ${PORT} `)
})
app.get("/user",(req,res)=>{
    res.send("Request received")
})

