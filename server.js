const { response } = require("express");
const express = require("express");
const { sendfile } = require("express/lib/response");
const { request } = require("http");
const { dirname } = require("path");
const path = require("path");
const { send } = require("process");
const app = express();

app.use('/public', express.static(path.join(__dirname, "public")));

// ROTA PRINCIPAL
app.get("/", (request,response) => {
    response.sendFile(path.join(__dirname,("/public/index.html")))
})

const port = 3000;

app.listen(port, ()  => {
    console.log("App listening on port" + port);
});


