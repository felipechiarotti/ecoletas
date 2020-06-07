const express = require("express")
const server = express()
const db = require("./database/db.js")

server.use(express.static("public"))

const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})



server.get("/", (req, res) => {
    res.render("index.html")
})

server.get("/create-point", (req, res) => {
    res.render("create-point.html")
})

server.get("/search", (req, res) => {
    db.all(`SELECT * FROM places`, (err, rows) => {
        if (err){
            return console.log(err)
        }
        return res.render("search-results.html", {
            places: rows,
            count: rows.length
        })
        })

})


server.listen(3000)