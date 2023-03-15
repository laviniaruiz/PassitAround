const express = require ('express')

const app = express ()

const PORT = 8082

app.get("/",(req, res) => {
    res.send(`99 Bottles of beer on the wall.<br/>
    <a href="/98">Take one down, pass it around.</a>`)
})


app.get("/0",(req, res) => {
    res.send(`0 Bottles of beer on the wall.<br/>
    <a href="/">Start Over</a>`)
})

app.get("/:bottles",(req, res) => {
    res.send(`${req.params.bottles} Bottles of beer on the wall.<br/>
    <a href="/${req.params.bottles -1 }">Take one down, pass it around.</a>
    `)
})

app.listen(PORT, () => {
    console.log("Listening on port 8082")
})