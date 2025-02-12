// version 1.0.0 divided as Major Version,minor version,patch version
// when we handle any bug or add small fixes comes in patch
//Minor version: for small feature (backwards compatible)
// Major version: for breaking changes


const express = require("express");
const app = express();
// Request handler

app.get("/hello", (req, res) => {
    res.send("Hello Everyone");
});

app.get("/user", (req, res) => {
    res.send("User");
});
// Catch-all route should be last
app.get("/", (req, res) => {
    res.send("Hello, world! Deepak");
});

app.listen(3000, () => {
    console.log("Server listening ");
});
