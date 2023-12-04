const express = require("express");
const recommendationRoutes = express.Router();
const { prisma } = require("../config/prisma");

// get all recommendation
recommendationRoutes.get("/", async (req, res) => {
  const recommendation = await prisma.menu.findMany({
    where: {
      is_recommended: true,
    },
  });
  if (!recommendation)
    res.status(404).json({ message: "Recommendation not found" });
  else res.status(200).send(recommendation);
});

module.exports = { recommendationRoutes };
