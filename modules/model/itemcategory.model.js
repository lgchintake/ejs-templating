import mongoose from "mongoose";

const itemCategorySchema = mongoose.Schema({
  categoryName: { type: String },
  categoryDescription: { type: String },
});

const itemCategory = mongoose.model(
  "itemCategory",
  itemCategorySchema,
  "itemCategory"
);

export default itemCategory;
