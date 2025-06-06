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

app.get("/", (req, res) => {
    res.render("index",{messages:messages});
});

app.get("/new", (req, res) => {
    res.send("<h1>Form</h1>");
});

app.listen(PORT, () => {
    console.log(`Started Server on PORT ${PORT}`);
});