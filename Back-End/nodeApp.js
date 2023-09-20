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
  } = req.body;
  let productAdded = await productModel.insertMany({
    productName,
    productPrice,
    productDescription,
    productImage,
    productStatus,
    productType,
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
      res.json({ message: "success", getAllProducts });
    } else {
      res.json({ message: "failed" });
    }
  });
//...........................get product by ID.................................
app.get("/products/:id", async function (req, res) {
    const id = req.params.id;
    let getSingleProduct = await productModel.findById(id);
    if (getSingleProduct) {
      res.json({ message: "success", getSingleProduct });
    } else {
      res.json({ message: "failed" });
    }
  });

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
