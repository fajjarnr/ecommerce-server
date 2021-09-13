const express = require("express");

const router = express.Router();

const { createOrUpdateUser } = require("../controller/auth");

router.get("/create-or-update-user", createOrUpdateUser);

module.exports = router;
