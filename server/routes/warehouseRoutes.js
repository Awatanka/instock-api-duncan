const router = require("express").Router();
const warehouseController = require("../controllers/warhouseController");

router.route("/").get(warehouseController.index);

module.exports = router;