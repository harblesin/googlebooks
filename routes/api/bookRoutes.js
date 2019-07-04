const router = require("express").Router();
const booksController = require("../../controllers/bcontroller");

router.route("/")
.post(booksController.saveBook)
.get(booksController.findAll)
.delete(booksController.Remove)

module.exports = router;