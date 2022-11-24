const router = require("express").Router();
const inventoryController = require("../controllers/inventoryController");

router
  .route("/")
  .get(inventoryController.index)
  .post(inventoryController.addInventoryItem);

router
  .route("/:id")
  .get(inventoryController.singleInventory)
  .put(inventoryController.updateInventoryItem)
  .delete(inventoryController.deleteInventoryItem);

router.route("/:id/inventories").get(inventoryController.inventoryItems);

module.exports = router;
