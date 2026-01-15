const express = require("express");
const app = express();

app.get("/", function (req, res) {
    res.send(" Welcome Node js ");
});  

app.listen(5000, () => {
    console.log("Node server is runing on port 5000...");
});