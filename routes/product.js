const express = require("express");
const router = express.Router();

// middlewares
const { authCheck, adminCheck } = require("../middleware/auth");

// controller
const { create, read } = require("../controller/product");

// routes
router.post("/product", authCheck, adminCheck, create);
router.get("/products", read);

module.exports = router;
