import express from "express"
import fs from "fs"
const router = express.Router()

router.get("/", (req, res) => {
    res.render("index.njk", {
        title: "Vår första dynamiska sida",
        message: "Med Nunjucks skapar vi magi!"
    })
})

router.get("/about", (req, res) => {
    res.render("about.njk", {
        title: "Om oss",
        message: "Detta är ett skolarbete av Viktor.",
        name: "Viktor"
    })
})

router.get("/greeting", (req, res) => {
    console.log(req.query)
    res.send(`Hejsan ${req.query.name}, ${req.query.message}`)
})

router.get("/movies", (req, res) => {
    const {movies} = JSON.parse(fs.readFileSync("./data/movies.json"))
    res.render("movies.njk", {
        title: "Filmer",
        movies: movies
    })
})

export default router