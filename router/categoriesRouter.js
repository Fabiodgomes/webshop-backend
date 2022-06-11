const { Router } = require("express");
const Category = require("../models").category;
const { express } = require("express");
const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const getAllCategory = await Category.findAll();
    res.send(getAllCategory);
  } catch (e) {
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const getOneCategory = await Category.findByPk(id, { raw: true });
    res.send(getOneCategory);
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
