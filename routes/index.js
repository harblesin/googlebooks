const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

//Beginning definition of routes
router.use("/api", apiRoutes);

router.use(function(req,res){
    res.sendFile(path.join(__dirname, "../gapp/build/index.html"));
});

module.exports = router;