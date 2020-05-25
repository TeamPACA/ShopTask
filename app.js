const express = require("express");
const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));



//Waiting on receiving the routes folder.
//require("./routes/api-routes.js")(app);




app.listen(PORT, function() {
console.log("App listening on PORT " + PORT);
});