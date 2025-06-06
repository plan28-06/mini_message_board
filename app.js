const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const path = require("node:path");
const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date(),
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date(),
    },
];

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index", { messages: messages });
});

app.get("/new", (req, res) => {
    res.render("form");
});

app.post("/new", (req, res) => {
    if (!req.body ||!req.body.text || !req.body.user ) {
        return res.status(400).send("<h1>Yo please send data correctly</h1>");
    }
    const newpost = {
        text: req.body.text,
        user: req.body.user,
        added: new Date(),
    };
    messages.push(newpost);
    res.redirect("/");
});

app.listen(PORT, () => {
    console.log(`Started Server on PORT ${PORT}`);
});
