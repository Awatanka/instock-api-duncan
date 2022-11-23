require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5050;

const warehouseRoutes = require("./server/routes/warehouseRoutes");
const inventoryRoutes = require("./server/routes/inventoryRoutes")

app.use("/warehouses", warehouseRoutes);
app.use("/inventories", inventoryRoutes)

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});
