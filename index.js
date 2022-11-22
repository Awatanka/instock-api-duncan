const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "./.env") });

const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "server", "public")));

const PORT = process.env.PORT || 5500;

app.get("/", (_request, response) => {
  response
    .status(200)
    .sendFile(path.join(__dirname, "server", "public", "index.html"));
});

const warehouseRoutes = require("./server/routes/warehouseRoute");
app.use("/warehouses", warehouseRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} 🚀`);
});
