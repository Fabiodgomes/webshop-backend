const productRouter = require("./router/productRouter");

const categoriesRouter = require("./router/categoriesRouter");
const categorieRouter = require("./router/categorieRouter");
const reviewRouter = require("./router/reviewRouter");
const express = require("express");
const cors = require("cors");

// const authenticazion = require("./Auth");
const app = express();
const PORT = process.env.PORT || 4000;
// body parser middleware => created req.body
app.use(cors());
app.use(express.json());
app.use("/products", productRouter);

app.use("/categories", categoriesRouter);

app.use("/categories", categorieRouter);
app.use("/reviews", reviewRouter);


// start the app
app.listen(PORT, () => console.log("running on port 4000"));
