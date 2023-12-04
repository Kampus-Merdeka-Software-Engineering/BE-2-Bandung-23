const express = require("express");
const homeRoutes = express.Router();
const { prisma } = require("../config/prisma");

// get offering menu
homeRoutes.get("/offer", async (req, res) => {
  const menu = await prisma.menu.findMany({
    where: {
      is_offered: true,
    },
  });
  if (!menu) res.status(404).json({ message: "Menu not found" });
  else res.status(200).send(menu);
});

module.exports = { homeRoutes };
