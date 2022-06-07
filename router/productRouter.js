const { Router } = require("express");
const Product = require("../models").product;
const { express } = require("express");
const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const getAllProduct = await Product.findAll();
    res.send(getAllProduct);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
