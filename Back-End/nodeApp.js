import express from "express";
import cors from "cors";
import { dbConnection } from "./database/dbConnection.js";
import { productModel } from "./database/models/product.model.js";
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
dbConnection();

//...........................add product.................................
app.post("/productsAdd", async function (req, res) {
  const {
    productName,
    productPrice,
    productDescription,
    productImage,
    productStatus,
    productType,
    pageNumber,
    id
  } = req.body;
  let productAdded = await productModel.insertMany({
    productName,
    productPrice,
    productDescription,
    productImage,
    productStatus,
    productType,
    pageNumber,
    id
  });
  if (productAdded) {
    res.json({ message: "success", productAdded });
  } else {
    res.json({ message: "failed" });
  }
});
//...........................get all Home Page products //nooran.................................
app.get("/products", async function (req, res) {
  let getAllProducts = await productModel.find( {id: { $gte: 1, $lte: 9 }});
  if (getAllProducts) {
    res.send(getAllProducts);
  } else {
    res.json({ message: "failed" });
  }
});
//...........................get beauty products only //nooran .................................
app.get("/beautyProducts", async function (req, res) {
  let getBeautyProducts = await productModel.find({productType: { $eq:"Beauty"}});
  if (getBeautyProducts) {
    res.send(getBeautyProducts);
  } else {
    res.json({ message: "failed" });
  }
});
//...........................get ## .................................
app.get("/products", async function (req, res) {
  let getAllProducts = await productModel.find();
  if (getAllProducts && getAllProducts.productType == "") {
    res.send(getAllProducts);
  } else {
    res.json({ message: "failed" });
  }
});
//...........................get product by ID //nooran.................................
app.get("/products/:productId", async function (req, res) {
  const productId = +req.params.productId;
  let getSingleProduct2 = await productModel.findOne({
    id: productId,
  });
  if (getSingleProduct2) {
    res.send(getSingleProduct2);
  } else {
    res.json({ message: "failed" });
  }
});

//...........................home search for product //nooran.................................
app.post("/products/search", async function (req, res) {
  const { productName } = req.body;
  let product = await productModel.find({
    productName: { $regex: `${productName}` },
  });
  if (product.length) {
    res.send({ product });
  } else {
    res.json({ message: "NO product MATCHED" });
  }
});

//pagination search

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));