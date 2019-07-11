//Import block for dependencies
const express = require("express");
const mongoose = require("mongoose");
const routes =require("./routes")
const app = express();
const PORT = process.env.PORT || 3001;

//Established middleware preferences and for when to use production parameters
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
    app.use(express.static("gapp/build"));
}
app.use(routes);

//Creates the connection to the mongoose db
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {
    useNewUrlParser: true 
})

//Begins listening
app.listen(PORT, function(){
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
})