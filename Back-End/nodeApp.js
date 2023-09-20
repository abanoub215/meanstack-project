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
    pageNumber
  } = req.body;
  let productAdded = await productModel.insertMany({
    productName,
    productPrice,
    productDescription,
    productImage,
    productStatus,
    productType,
    pageNumber
  });
  if (productAdded) {
    res.json({ message: "success", productAdded });
  } else {
    res.json({ message: "failed" });
  }
});
//...........................get all products.................................
app.get("/products", async function (req, res) {
    let getAllProducts = await productModel.find();
    if (getAllProducts) {
      res.send(getAllProducts);
    } else {
      res.json({ message: "failed" });
    }
  });
  //...........................get ## .................................
app.get("/products", async function (req, res) {
  let getAllProducts = await productModel.find();
  if (getAllProducts&&getAllProducts.productType=="") {
    res.send(getAllProducts);
  } else {
    res.json({ message: "failed" });
  }
});
//...........................get product by ID.................................
app.get("/products2/:productId", async function (req, res) {
  const productId = +req.params.productId;
  let getSingleProduct2 = await productModel.findOne({
    productId:productId,
  });
  if (getSingleProduct2) {
    res.send(getSingleProduct2 );
  } else {
    res.json({ message: "failed" });
  }
});
//pagination search

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
