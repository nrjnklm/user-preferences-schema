const mongoose = require("mongoose");

/* ---------- Review Schema ---------- */
const reviewSchema = new mongoose.Schema({
  reviewerName: {
    type: String,
    required: true,               // reviewer's name is mandatory
    trim: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,                       // rating from 1 to 5
  },
  comment: {
    type: String,                 // optional feedback text
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,            // defaults to current time
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,               // must reference a product
  },
});

/* ---------- Product Schema ---------- */
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,               // product name is mandatory
    trim: true,
  },
  category: {
    type: String,
    required: true,
    enum: ["electronics", "fashion", "home", "books"], // fixed categories
  },
  price: {
    type: Number,
    required: true,
    min: 1,                       // price must be at least 1
  },
  inStock: {
    type: Boolean,
    default: true,                // available by default
  },
  releaseDate: {
    type: Date,                   // optional launch date
  },
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",              // references Review documents
    },
  ],
});

/* ---------- Compile Models ---------- */
const Review = mongoose.model("Review", reviewSchema);
const Product = mongoose.model("Product", productSchema);

module.exports = { Product, Review };
