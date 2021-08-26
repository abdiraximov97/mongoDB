
const { urlencoded } = require("express");
const express = require("express");
const app = express();



app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));

app.set("view engine", "ejs");

app.use(express.static(__dirname, "/public"));

const port = process.env.port || 80;
app.listen(port, () => {
    console.log(`server ${port} - portda yondi`);
})