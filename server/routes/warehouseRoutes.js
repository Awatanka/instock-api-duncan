const router = require("express").Router();
const warehouseController = require("../controllers/warehouseController");

router
  .route("/")
  .get(warehouseController.findAll)
  .post(warehouseController.add);

router
  .route("/:id")
  .get(warehouseController.findOne)
  .patch(warehouseController.update)
  .delete(warehouseController.remove);

router.route("/:id/inventory").get(warehouseController.inventory);

module.exports = router;
