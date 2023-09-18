import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  productName: String,
  productPrice: Number,
  productDescription:String,
  productImage:String,
  productStatus:String,
  productType:String

});
export const productModel= mongoose.model("Product", productSchema);
