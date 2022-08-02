const path = require("path")

module.exports = {
    home: (req, res) => {res.sendFile(path.resolve(__dirname,"../","views","home.html"))},
    about: (req, res) => {res.sendFile(path.resolve(__dirname,"../","views","about.html"))}
}
