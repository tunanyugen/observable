const express = require("express");
const app = express();
const path = require("path");

app.use('/static', express.static('demo'));
app.use('/static', express.static('dist'));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "demo/index.html"));
})

app.listen(8000)