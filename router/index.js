  
const router = require("express").Router();
const book = require("./books");

// Book routes
router.use("/books", book);

module.exports = router;