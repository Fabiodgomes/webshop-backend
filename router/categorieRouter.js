const { Router } = require("express");
const Categorie = require("../models").category;
const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const getAllCategories = await Categorie.findAll();
    res.send(getAllCategories);
  } catch (e) {
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const getOneCategorie = await Categorie.findByPk(id, { raw: true });
    res.send(getOneCategorie);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
