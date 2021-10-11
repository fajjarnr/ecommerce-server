const express = require("express");
const router = express.Router();

// middlewares
const { authCheck, adminCheck } = require("../middleware/auth");

// controller
const {
  create,
  listAll,
  remove,
  read,
  update,
  list,
  productsCount,
  productStar,
  listRelated,
  searchFilters,
} = require("../controller/product");

// routes
router.post("/product", authCheck, adminCheck, create);
router.get("/products/total", productsCount);
router.post("/products", list);

router.get("/products/:count", listAll);
router.get("/product/:slug", read);
router.put("/product/:slug", authCheck, adminCheck, update);
router.delete("/product/:slug", authCheck, adminCheck, remove);

router.put("/product/star/:productId", authCheck, productStar);

router.get("/product/related/:productId", listRelated);

router.post("/search/filters", searchFilters);

module.exports = router;
