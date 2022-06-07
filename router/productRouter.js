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

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const getOneProduct = await Product.findByPk(id, { raw: true });
    res.send(getOneProduct);
  } catch (e) {
    next(e);
  }
});

// router.get("/:id", async (req, res, next) => {
//   try {
//     const { id } = req.params;

//     const getOneProduct = await Product.findAll({
//       where: {
//         id: id,
//       },
//     });
//     res.send(getOneProduct);
//   } catch (error) {
//     console.log(error);
//     next(error);
//   }
// });

module.exports = router;
