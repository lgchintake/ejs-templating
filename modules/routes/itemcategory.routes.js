import express from "express";
import {
  addItemCategory,
  editItemCategory,
  getItemCategories,
  saveItemCategory,
  updateItemCategory,
} from "../controller/itemcategory.controller.js";

const itemCategoryRouter = express();

itemCategoryRouter.route("/add").get(addItemCategory);
itemCategoryRouter.route("/edit/:id").get(editItemCategory);
itemCategoryRouter.route("/:id").post(updateItemCategory);
itemCategoryRouter.route("/").post(saveItemCategory);
itemCategoryRouter.route("/").get(getItemCategories);

export default itemCategoryRouter;
