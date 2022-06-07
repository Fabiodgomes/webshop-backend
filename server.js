const productRouter = require("./router/productRouter");
const express = require("express");

// const authenticazion = require("./Auth");
const app = express();
const PORT = process.env.PORT || 4000;
// body parser middleware => created req.body
app.use(express.json());
app.use("/products", productRouter);

// start the app
app.listen(PORT, () => console.log("running on port 4000"));
