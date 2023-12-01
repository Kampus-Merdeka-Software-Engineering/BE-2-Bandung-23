const express = require("express");
const router = express.Router();
const service = require("../service");

router.get("/", async function (req, res, next) {});
router.get("/:id", async function (req, res, next) {});
router.post("/", async function (req, res, next) {});
router.delete("/:id", async function (req, res, next) {});
router.put("/:id", async function (req, res, next) {});

module.exports = router;
