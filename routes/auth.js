const express = require("express");

const router = express.Router();

const { authCheck } = require("../middleware/auth");

const { createOrUpdateUser } = require("../controller/auth");

router.get("/auth", authCheck, createOrUpdateUser);

module.exports = router;
