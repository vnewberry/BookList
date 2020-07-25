const router = require("express").Router();
const apiController = require("../../controllers/apiController.js");

// Matches with "/api/google"
router
  .route("/")
  .get(apiController.findAll);

module.exports = router;
