import express from "express";
import itemCategoryRoute from "./itemcategory.routes.js";
import itemCategoryUiRoute from "./itemcategory.ui.routes.js";

const Router = express();

Router.use("/item-category", itemCategoryRoute);
Router.use("/item-category/ui", itemCategoryUiRoute);

export default Router;
