const Product = require("../models").product;
const Category = require("../models").category;
const Review = require("../models").review;
const { Router } = require("express");
const req = require("express/lib/request");

const router = Router();

router.post("/:productId", async (req, res, next) => {
  try {
    const { review } = req.body;
    const { productId } = req.params;
    console.log(review, productId);
    const newReview = await Review.create({
      review,
      productId,
    });
    res.send(newReview);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

router.get("/:productId", async (req, res, next) => {
  try {
    const { productId } = req.params;
    const getAllReview = await Review.findAll({
      where: { productId: productId },
    });
    res.send(getAllReview);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
