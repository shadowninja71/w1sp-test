import express from "express"
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

export default router