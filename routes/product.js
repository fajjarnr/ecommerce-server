const express = require("express");
const router = express.Router();

// middlewares
const { authCheck, adminCheck } = require("../middleware/auth");

// controller
const { create, listAll, remove, read } = require("../controller/product");

// routes
router.post("/product", authCheck, adminCheck, create);
router.get("/products/:count", listAll);
router.get("/product/:slug", read);
router.delete("/product/:slug", authCheck, adminCheck, remove);

module.exports = router;
