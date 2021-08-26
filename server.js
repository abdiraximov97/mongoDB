
const express = require("express");
const app = express();
const path = require("path");
const routes = require("./routes/routes");



app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));

routes(app);

const port = process.env.port || 8080;
app.listen(port, () => {
    console.log(`server ${port} - portda yondi`);
})